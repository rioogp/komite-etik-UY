const express = require('express');
const { authorize } = require('../middlewares/auth.middleware');
const {
  getNotifications,
  markAsRead,
  unreadNotifications,
} = require('../controllers/notification.controller');

const router = express.Router();

router.get('/', authorize, getNotifications);
router.patch('/mark-as-read', authorize, markAsRead);
router.get('/unread-notifications', authorize, unreadNotifications);

module.exports = router;
