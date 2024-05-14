/* eslint-disable import/no-extraneous-dependencies */
const multer = require('multer');
const archiver = require('archiver');
const fs = require('fs');

const catchAsync = require('../utils/catchAsync');
const Document = require('../models/document.model');
const AppError = require('../utils/appError');
const User = require('../models/user.model');

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

  const zipPath = `public/documents/user/${researchName.replace(/\s+/g, '_')}-${name.replace(/\s+/g, '_')}.zip`;

  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', async () => {
    documents.forEach((filename) => {
      const filePath = `public/documents/user/${filename}`;
      fs.unlinkSync(filePath);
    });

    const newDocument = await Document.create({
      nameUser: name,
      researchName: researchName,
      status: 'Sedang Diproses',
      documents: [
        `${researchName.replace(/\s+/g, '_')}-${name.replace(/\s+/g, '_')}.zip`,
      ],
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

  if (req.user.role === 'ketua') {
    status = 'Layak';
  } else {
    status = 'Sedang Diproses';
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

  res.status(200).json({
    status: 'success',
    message: 'Reviewer status updated successfully',
    data: newDocument,
  });
});

exports.getDocuments = catchAsync(async (req, res, next) => {
  const documents = await Document.find();
  res.status(200).json({
    status: 'success',
    data: { documents },
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

  const documents = await Document.find({ createdBy: _id });

  res.status(200).json({
    status: 'success',
    data: { documents },
  });
});

exports.sendStatus = catchAsync(async (req, res, next) => {
  const { documentId } = req.params;
  const { status } = req.body;
  const document = await Document.findByIdAndUpdate(
    documentId,
    { status },
    { new: true },
  );

  res.status(200).json({
    status: 'success',
    message: 'Document status send to user',
    data: { document },
  });
});
