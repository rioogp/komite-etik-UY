const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const User = require('../models/user.model');
const { generateEmailMessage } = require('../utils/generateEmailMessage');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const sendVerificationEmail = async (user, message, res, next) => {
  try {
    await sendEmail({
      email: user.email,
      subject: 'Verifikasi Email',
      message,
    });

    res.status(201).json({
      status: 'success',
      message: 'Verification link successfully sent to your email address',
      data: {
        user,
      },
    });
  } catch (error) {
    user.verificationToken = undefined;
    user.verificationExpires = undefined;
    return next(
      AppError('Failed to send verification email. Please try again.', 500),
    );
  }
};

exports.signUp = catchAsync(async (req, res, next) => {
  const { name, email, username, instance, password, passwordConfirm, role } =
    req.body;
  const newUser = await User.create({
    name,
    email,
    username,
    instance,
    password,
    passwordConfirm,
    role,
  });

  newUser.createVerificationToken();

  const verificationURL = `${process.env.CLIENT_URL}verification/${newUser.verificationToken}`;

  const message = generateEmailMessage(
    verificationURL,
    'Verifikasi Email',
    'Terima kasih telah mendaftar di website kami. Untuk memverifikasi email Anda, silakan klik tombol di bawah ini:',
  );

  sendVerificationEmail(newUser, message, res, next);
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { token } = req.params;

  const user = await User.findOne({
    verificationToken: token,
    verificationExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError('Invalid or expired verification token', 400));
  }

  user.verified = true;
  user.verificationToken = undefined;
  user.verificationExpires = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    message: 'Email verification successful',
  });
});

exports.resendVerificationEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new AppError('User with this email address does not exist', 404),
    );
  }

  if (user.verified) {
    return next(new AppError('Email is already verified', 400));
  }

  user.createVerificationToken();
  const verificationURL = `${process.env.CLIENT_URL}verification/${user.verificationToken}`;

  const message = generateEmailMessage(
    verificationURL,
    'Verifikasi Email',
    'Terima kasih telah mendaftar di website kami. Untuk memverifikasi email Anda, silakan klik tombol di bawah ini:',
  );

  sendVerificationEmail(user, message, res, next);
});

exports.login = catchAsync(async (req, res, next) => {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return next(
      new AppError('Please enter a valid email/username and password', 400),
    );
  }

  const user = await User.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email/username or password', 401));
  }

  if (!user.verified) {
    return next(new AppError('Please verify your email address', 400));
  }

  createSendToken(user, 201, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  user.createPasswordResetToken();

  const resetURL = `${process.env.CLIENT_URL}reset-password/${user.passwordResetToken}`;

  const message = generateEmailMessage(
    resetURL,
    'Reset Password',
    'Silakan gunakan tautan di bawah untuk mengatur ulang kata sandi yang terkait dengan akun Anda:',
  );
  try {
    await sendEmail({
      email: user.email,
      subject: 'Reset Password',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Reset password link sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500,
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    passwordResetToken: req.params.token,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createSendToken(user, 200, res);
});
