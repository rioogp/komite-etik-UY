const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  nameMeeting: {
    type: String,
    required: [true, 'Meeting must be filled'],
    trim: true,
    minlength: 1,
    unique: true,
  },
  meetingSchedule: {
    type: Date,
    required: [true, 'Meeting schedule must be filled'],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

meetingSchema.statics.canCreate = function (role) {
  return role === 'ketua';
};

meetingSchema.statics.canView = function (role) {
  return ['admin', 'reviewer', 'ketua'].includes(role);
};

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
