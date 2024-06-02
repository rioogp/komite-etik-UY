/* eslint-disable import/no-extraneous-dependencies */
const multer = require('multer');
const archiver = require('archiver');
const fs = require('fs');

const catchAsync = require('../utils/catchAsync');
const Document = require('../models/document.model');
const AppError = require('../utils/appError');
const User = require('../models/user.model');
const Notification = require('../models/notification.model');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `public/documents/user`;
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter: multerFilter });

exports.uploadUserDocuments = upload.array('documents', 7);

exports.uploadDocuments = catchAsync(async (req, res, next) => {
  const { researchName } = req.body;
  const { name, _id } = req.user;
  const documents = req.files.map((file) => file.filename);
  const admin = await User.findOne({ role: 'admin' });

  const timestamp = Date.now();
  const formattedResearchName = researchName.replace(/\s+/g, '_');
  const formattedName = name.replace(/\s+/g, '_');
  const zipFileName = `${formattedResearchName}-${formattedName}-${timestamp}.zip`;
  const zipPath = `public/documents/user/${zipFileName}`;
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', async () => {
    documents.forEach((filename) => {
      const filePath = `public/documents/user/${filename}`;
      fs.unlinkSync(filePath);
    });

    Notification.create({
      name: 'Berkas Penelitian Terkirim',
      description: `Unggahan Anda untuk penelitian '${researchName}' berhasil diterima. Mohon untuk menunggu berkas untuk diproses lebih lanjut.`,
      user: _id,
    });

    Notification.create({
      name: 'Berkas Penelitian Baru Diterima',
      description: `Unggahan baru untuk penelitian '${researchName}' dari ${name} memerlukan perhatian Anda. Silakan periksa dan lakukan tindakan yang diperlukan.`,
      user: admin._id,
    });

    const newDocument = await Document.create({
      nameUser: name,
      researchName: researchName,
      status: 'Sedang Diproses',
      documents: [zipFileName],
      createdBy: _id,
    });

    res.status(201).json({
      status: 'success',
      message: 'Documents uploaded and zipped successfully',
      data: newDocument,
    });
  });

  archive.on('error', (err) => {
    throw new AppError(err.message, 500);
  });

  archive.pipe(output);
  documents.forEach((filename) => {
    const filePath = `public/documents/user/${filename}`;
    archive.file(filePath, { name: filename });
  });

  archive.finalize();
});

exports.updateDocuments = catchAsync(async (req, res, next) => {
  const { documentId } = req.params;

  const document = await Document.findById(documentId);

  if (!document) {
    return next(new AppError('No document found with that ID', 404));
  }

  let status;

  if (req.user.role === 'admin') {
    status = 'Layak';
    await Notification.create({
      name: 'Dokumen Dinyatakan Layak',
      description: `Dokumen penelitian '${document.researchName}' telah dinyatakan layak. Anda dapat melanjutkan proses selanjutnya.`,
      user: document.createdBy,
    });
  } else {
    status = 'Sedang Diproses';
    document.reviewers = [];
  }

  const oldZipName = document.documents[0];
  const oldZipPath = `public/documents/user/${oldZipName}`;

  fs.unlinkSync(oldZipPath);

  const newZipPath = oldZipPath;
  const documents = req.files.map((file) => file.filename);

  const output = fs.createWriteStream(newZipPath);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', async () => {
    documents.forEach((filename) => {
      const filePath = `public/documents/user/${filename}`;
      fs.unlinkSync(filePath);
    });

    document.status = status;
    await document.save();

    res.status(200).json({
      status: 'success',
      message: 'Documents updated and zipped successfully',
      data: document,
    });
  });

  archive.on('error', (err) => {
    throw new AppError(`Error occurred while zipping files: ${err}`, 500);
  });

  archive.pipe(output);

  documents.forEach((filename) => {
    const filePath = `public/documents/user/${filename}`;
    archive.file(filePath, { name: filename });
  });

  archive.finalize();
});

exports.downloadDocuments = catchAsync(async (req, res, next) => {
  const { filename } = req.params;
  const zipFilePath = `public/documents/user/${filename}`;
  res.download(zipFilePath, filename, (err) => {
    if (err) {
      return next(new AppError(err.message, 404));
    }
  });
});

exports.addReviewers = catchAsync(async (req, res, next) => {
  const { reviewers } = req.body;
  const { documentId } = req.params;

  const findReviewers = await Promise.all(
    reviewers.map(async (reviewerName) => {
      const reviewer = await User.findOne({
        name: reviewerName,
        role: 'reviewer',
      });

      if (!reviewer) {
        return next(
          new AppError(`Reviewer with name ${reviewerName} not found`, 404),
        );
      }

      await Notification.create({
        name: 'Berkas Penelitian untuk Direview',
        description: `Anda telah ditugaskan untuk mereview dokumen penelitian. Segera cek di Berkas!`,
        user: reviewer._id,
      });

      return { _id: reviewer._id, name: reviewerName };
    }),
  );

  const newDocument = await Document.findByIdAndUpdate(
    documentId,
    {
      $addToSet: {
        reviewers: {
          $each: findReviewers,
        },
      },
      $set: {
        status: 'Sedang Direview',
      },
    },
    { new: true },
  );

  res.status(201).json({
    status: 'success',
    message: 'Reviewers added successfully',
    data: newDocument,
  });
});

exports.updateReviewerStatus = catchAsync(async (req, res, next) => {
  const { status, message } = req.body;
  const { documentId } = req.params;
  const { _id } = req.user;
  const admin = await User.findOne({ role: 'admin' });

  if (!admin) {
    return next(new AppError('Admin user not found', 404));
  }

  const newDocument = await Document.findOneAndUpdate(
    {
      _id: documentId,
      'reviewers._id': _id,
    },
    {
      $set: {
        'reviewers.$.status': status,
        'reviewers.$.message': message,
      },
    },
    { new: true },
  );

  if (!newDocument) {
    return next(new AppError('Document or reviewer not found', 404));
  }

  const { researchName, nameUser } = newDocument;

  await Notification.create({
    name: 'Reviewer Memberikan Ulasan Baru',
    description: `Reviewer '${req.user.name}' telah memperbarui status untuk penelitian '${researchName}' dari ${nameUser}. Silakan periksa dan lakukan tindakan yang diperlukan.`,
    user: admin._id,
  });

  res.status(200).json({
    status: 'success',
    message: 'Reviewer status updated successfully',
    data: newDocument,
  });
});

exports.getDocuments = catchAsync(async (req, res, next) => {
  const filter = req.query.filter || 'terbaru';
  let sortOption;

  if (filter === 'terbaru') {
    sortOption = { createdAt: -1 };
  } else if (filter === 'terlama') {
    sortOption = { createdAt: 1 };
  }

  const documents = await Document.find().sort(sortOption);

  res.status(200).json({
    status: 'success',
    data: {
      documents,
    },
  });
});

exports.getDocument = catchAsync(async (req, res, next) => {
  const document = await Document.findById(req.params.documentId);

  if (!document) {
    return next(new AppError('Document not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { document },
  });
});

exports.getDocumentsByUser = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const { filter } = req.query;

  let sortOption;

  if (filter === 'terbaru') {
    sortOption = { createdAt: -1 };
  } else if (filter === 'terlama') {
    sortOption = { createdAt: 1 };
  }

  const documents = await Document.find({ createdBy: _id }).sort(sortOption);

  res.status(200).json({
    status: 'success',
    data: {
      documents,
    },
  });
});

exports.sendStatus = catchAsync(async (req, res, next) => {
  const { documentId } = req.params;
  const { status } = req.body;
  const admin = await User.findOne({ role: 'admin' });

  const document = await Document.findByIdAndUpdate(
    documentId,
    { status },
    { new: true },
  );

  switch (status) {
    case 'Tidak Layak':
      await Notification.create({
        name: 'Dokumen Tidak Layak',
        description: `Dokumen penelitian '${document.researchName}' telah dinyatakan tidak layak. Silakan periksa dan perbaiki masalah yang ada.`,
        user: document.createdBy,
      });
      break;
    case 'Perbaikan':
      await Notification.create({
        name: 'Dokumen Butuh Perbaikan',
        description: `Dokumen penelitian '${document.researchName}' butuh perbaikan. Silakan periksa dan perbaiki masalah yang ada.`,
        user: document.createdBy,
      });
      break;
    case 'Sedang Ditandatangani':
      await Notification.create({
        name: 'Dokumen Sedang Ditandatangani',
        description: `Dokumen penelitian '${document.researchName}' sedang ditandatangani oleh Ketua. Silakan tunggu konfirmasi lebih lanjut.`,
        user: document.createdBy,
      });

      await Notification.create({
        name: 'Dokumen Menunggu untuk Ditandatangani',
        description: `Dokumen penelitian '${document.researchName}' menunggu untuk ditandatangani. Silakan proses lebih lanjut pada halaman berkas.`,
        user: admin._id,
      });
      break;

    default:
      return next(new AppError('Something went wrong', 500));
  }

  res.status(200).json({
    status: 'success',
    data: { document },
  });
});
