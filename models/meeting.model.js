const mongoose = require('mongoose');
const validator = require('validator');

const meetingSchema = new mongoose.Schema({
  nameMeeting: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate(value) {
      if (!validator.isAlphanumeric(value)) {
        throw new Error('Meeting name must be alphanumeric');
      }
    },
  },
  meetingSchedule: {
    type: Date,
    required: [true, 'Meeting schedule must be filled'],
  },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
