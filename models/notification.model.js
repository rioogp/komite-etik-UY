const { default: mongoose } = require('mongoose');

const notificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  read: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
