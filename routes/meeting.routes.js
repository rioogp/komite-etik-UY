const express = require('express');
const { authorize, restrictTo } = require('../middlewares/auth.middleware');
const {
  createMeeting,
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
} = require('../controllers/meeting.controller');

const router = express.Router();

router
  .route('/')
  .post(authorize, restrictTo('ketua'), createMeeting)
  .get(authorize, restrictTo('ketua', 'admin', 'reviewer'), getMeetings);

router
  .route('/:id')
  .get(authorize, getMeeting)
  .post(authorize, restrictTo('ketua'), updateMeeting)
  .delete(authorize, restrictTo('ketua'), deleteMeeting);

module.exports = router;
