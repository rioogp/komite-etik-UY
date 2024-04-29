const express = require('express');
const { authorize } = require('../middlewares/auth.middleware');
const {
  createMeeting,
  getMeetings,
} = require('../controllers/meeting.controller');

const router = express.Router();

router.route('/').post(authorize, createMeeting).get(authorize, getMeetings);

module.exports = router;
