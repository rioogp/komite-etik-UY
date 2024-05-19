const Notification = require('../models/notification.model');
const catchAsync = require('../utils/catchAsync');

exports.getNotifications = catchAsync(async (req, res) => {
  const notifications = await Notification.find({
    user: req.user.id,
  }).sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    data: {
      notifications,
    },
  });
});

exports.unreadNotifications = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const unreadNotifications = await Notification.find({
    user: userId,
    read: false,
  });

  res.status(200).json({
    status: 'success',
    data: {
      unreadCount: unreadNotifications.length,
    },
  });
});

exports.markAsRead = catchAsync(async (req, res) => {
  const userId = req.user.id;

  await Notification.updateMany({ user: userId }, { $set: { read: true } });

  res.status(200).json({
    status: 'success',
    message: 'All notifications marked as read',
  });
});
