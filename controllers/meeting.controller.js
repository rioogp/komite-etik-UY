const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Meeting = require('../models/meeting.model');

exports.createMeeting = catchAsync(async (req, res, next) => {
  const { role, _id } = req.user;
  const meeting = await Meeting.create({
    nameMeeting: req.body.nameMeeting,
    meetingSchedule: req.body.meetingSchedule,
    createdBy: _id,
  });

  if (!meeting.canCreate(role)) {
    return next(new AppError('Only Ketua can create a meeting', 403));
  }

  res.status(201).json({
    status: 'success',
    data: {
      meeting,
    },
  });
});

exports.getMeetings = catchAsync(async (req, res, next) => {
  const { role } = req.user;

  // Periksa apakah pengguna memiliki izin untuk melihat daftar meeting
  if (!Meeting.canView(role)) {
    return next(
      new AppError('Only Ketua, Admin, and Reviewer can view meetings', 403),
    );
  }

  const meetings = await Meeting.find().populate('createdBy', 'name');

  res.status(200).json({
    status: 'success',
    results: meetings.length,
    data: {
      meetings,
    },
  });
});
