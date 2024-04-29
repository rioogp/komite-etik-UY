const express = require('express');
const { authorize } = require('../middlewares/auth.middleware');
const {
  createMeeting,
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
} = require('../controllers/meeting.controller');

const router = express.Router();

router.route('/').post(authorize, createMeeting).get(authorize, getMeetings);

router
  .route('/:id')
  .get(authorize, getMeeting)
  .post(authorize, updateMeeting)
  .delete(authorize, deleteMeeting);

module.exports = router;
