const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Meeting = require('../models/meeting.model');
const User = require('../models/user.model');
const Notification = require('../models/notification.model');

const createSendMeeting = (meeting, statusCode, res) => {
  res.status(statusCode).json({
    status: 'success',
    meeting,
  });
};

exports.createMeeting = catchAsync(async (req, res, next) => {
  const { role, _id } = req.user;
  const admin = await User.findOne({ role: 'admin' });
  const reviewers = await User.find({ role: 'reviewer' });

  const meeting = await Meeting.create({
    emailUser: req.user.email,
    nameMeeting: req.body.nameMeeting,
    meetingSchedule: req.body.meetingSchedule,
    createdBy: _id,
  });

  if (!Meeting.canCreateAndChange(role)) {
    return next(new AppError('Only Ketua can create a meeting', 403));
  }

  const date = new Date(meeting.meetingSchedule);
  const formattedDate = date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const notificationPromises = [
    Notification.create({
      name: 'Jadwal Pertemuan Berhasil Dibuat',
      description: `Jadwal pertemuan berhasil dibuat, pertemuan dijadwalkan pada ${formattedDate}.`,
      user: req.user._id,
    }),
    Notification.create({
      name: 'Jadwal Pertemuan Baru',
      description: `Jadwal pertemuan '${meeting.nameMeeting}' telah dibuat oleh ketua, pertemuan dijadwalkan pada ${formattedDate}.`,
      user: admin._id,
    }),
    ...reviewers.map((reviewer) =>
      Notification.create({
        name: 'Jadwal Pertemuan Baru',
        description: `Jadwal pertemuan '${meeting.nameMeeting}' telah dibuat oleh ketua, pertemuan dijadwalkan pada  ${formattedDate}.`,
        user: reviewer._id,
      }),
    ),
  ];

  await Promise.all(notificationPromises);

  createSendMeeting(meeting, 201, res);
});

exports.getMeetings = catchAsync(async (req, res, next) => {
  const { role } = req.user;

  if (!Meeting.canView(role)) {
    return next(
      new AppError('Only Ketua, Admin, and Reviewer can view meetings', 403),
    );
  }

  const meetings = await Meeting.find().populate('createdBy', 'name');

  createSendMeeting(meetings, 200, res);
});

exports.getMeeting = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;

  const meeting = await Meeting.findById(id).populate('createdBy', 'name');

  if (!meeting) {
    return next(new AppError('No meeting found with that ID', 404));
  }

  if (!Meeting.canView(role)) {
    return next(
      new AppError('Only Ketua, Admin, and Reviewer can view meetings', 403),
    );
  }

  createSendMeeting(meeting, 200, res);
});

exports.updateMeeting = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;

  const updatedMeeting = await Meeting.findByIdAndUpdate(
    id,
    {
      nameMeeting: req.body.nameMeeting,
      meetingSchedule: req.body.meetingSchedule,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedMeeting) {
    return next(new AppError('No meeting found with that ID', 404));
  }

  if (!Meeting.canCreateAndChange(role)) {
    return next(new AppError('Only Ketua can update a meeting', 403));
  }

  createSendMeeting(updatedMeeting, 200, res);
});

exports.deleteMeeting = catchAsync(async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;

  const deletedMeeting = await Meeting.findByIdAndDelete(id);

  if (!deletedMeeting) {
    return next(new AppError('No meeting found with that ID', 404));
  }

  if (!Meeting.canCreateAndChange(role)) {
    return next(new AppError('Only Ketua can delete a meeting', 403));
  }

  createSendMeeting(null, 204, res);
});
