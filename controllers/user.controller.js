/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const sharp = require('sharp');

const serviceKeyPath = path.resolve(__dirname, '../service.json');

const storageBucket = new Storage({
  keyFilename: serviceKeyPath,
});

const bucket = storageBucket.bucket('komite_etik');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  const resizedBuffer = await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer();

  try {
    const file = bucket.file(req.file.filename);
    await file.save(resizedBuffer, {
      metadata: { contentType: 'image/jpeg' },
      public: true,
    });

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${req.file.filename}`;
    req.file.publicUrl = publicUrl;

    next();
  } catch (err) {
    return next(new AppError('Error uploading image', 500));
  }
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  const photoURL = `http://127.0.0.1:8000/img/users/${user.photo}`;

  res.status(200).json({
    status: 'success',
    data: {
      user,
      photoURL,
    },
  });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  const userId = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      user: userId,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  user.name = req.body.name;
  user.username = req.body.username;
  user.email = req.body.email;
  user.instance = req.body.instance;
  user.role = req.body.role;

  if (req.body.password) {
    user.password = req.body.password;
    user.passwordConfirm = req.body.password;
  }

  await user.save();

  res.status(200).json({
    status: 'success',
    message: 'Successfully updated user data',
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    message: 'User deleted successfully',
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    instance: req.body.instance,
    role: req.body.role,
    verified: true,
    password: req.body.password,
    passwordConfirm: req.body.password,
  });

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

exports.updatePhoto = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('No photo provided', 400));
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { photo: req.file.publicUrl },
    { new: true, runValidators: true },
  );

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, password, passwordConfirm } = req.body;

  const user = await User.findById(req.user._id).select('+password');

  if (!(await user.correctPassword(currentPassword, user.password))) {
    return next(new AppError('Your current password is wrong', 401));
  }

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.updateName = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name: req.body.name },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
