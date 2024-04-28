const express = require('express');
const {
  signUp,
  login,
  verifyEmail,
  resendVerificationEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth.controller');
const { getAllUsers } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signUp', signUp);
router.get('/verify-email/:token', verifyEmail);
router.post('/login', login);
router.post('/resend-verify-email', resendVerificationEmail);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.route('/').get(getAllUsers);

module.exports = router;
