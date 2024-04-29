const express = require('express');
const { authorize } = require('../middlewares/auth.middleware');
const {
  createMeeting,
  getMeetings,
  getMeeting,
} = require('../controllers/meeting.controller');

const router = express.Router();

router.route('/').post(authorize, createMeeting).get(authorize, getMeetings);

router.route('/:id').get(authorize, getMeeting);

module.exports = router;
