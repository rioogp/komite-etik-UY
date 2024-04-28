const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const User = require('../models/user.model');

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

const generateEmailMessage = (verificationURL) => `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Verifikasi Email</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              color: #ffffff;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #4f88e3;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center; 
          }
          h1 {
              text-align: center;
          }
          p {
              line-height: 1.5;
          }
          a {
              display: inline-block;
              background-color: #ffffff;
              color: #4f88e3;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
          }
          a:hover {
              background-color: #e6e6e6;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Komite Etik Universitas Yarsi</h1>
          <p>Terima kasih telah mendaftar di website kami. Untuk memverifikasi email Anda, silakan klik tombol di bawah ini:</p>
          <a href="${verificationURL}">Verifikasi Email</a>
          <div>
            <p>Salam,</p>
            <p>Team Komite Etik Universitas Yarsi</p>
          </div>
      </div>
  </body>
  </html>
`;

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
  const { name, email, username, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    name,
    email,
    username,
    password,
    passwordConfirm,
  });

  newUser.createVerificationToken();

  const verificationURL = `${req.protocol}://${req.get(
    'host',
  )}/api/v1/users/verify-email/${newUser.verificationToken}`;

  const message = generateEmailMessage(verificationURL);

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
  const verificationURL = `${req.protocol}://${req.get(
    'host',
  )}/api/v1/users/verify-email/${user.verificationToken}`;

  const message = generateEmailMessage(verificationURL);

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

  const resetURL = `${req.protocol}://${req.get(
    'host',
  )}/api/v1/users/resetPassword/${user.passwordResetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
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
