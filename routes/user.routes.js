/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const {
  signUp,
  login,
  verifyEmail,
  resendVerificationEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth.controller');
const {
  getAllUsers,
  updatePhoto,
  uploadUserPhoto,
  resizeUserPhoto,
} = require('../controllers/user.controller');
const { authorize } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/signUp', signUp);
router.get('/verify-email/:token', verifyEmail);
router.post('/login', login);
router.post('/resend-verify-email', resendVerificationEmail);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch(
  '/updatePhoto',
  authorize,
  uploadUserPhoto,
  resizeUserPhoto,
  updatePhoto,
);

router.route('/').get(getAllUsers);

module.exports = router;
