const Document = require('../models/document.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

const getActiveUsersCount = async () => await User.countDocuments();

const getUploadedFilesCount = async () => {
  const documents = await Document.find();
  return documents.length;
};

const getCompletedDocumentsCount = async () => {
  const statuses = ['Layak', 'Tidak Layak'];
  return await Document.countDocuments({ status: { $in: statuses } });
};

exports.getStatistics = catchAsync(async (req, res, next) => {
  const activeUsersCount = await getActiveUsersCount();
  const uploadedFilesCount = await getUploadedFilesCount();
  const completedDocumentsCount = await getCompletedDocumentsCount();

  let percentageCompleted;
  if (uploadedFilesCount === 0) {
    percentageCompleted = '0%';
  } else {
    percentageCompleted = `${Math.round((completedDocumentsCount / uploadedFilesCount) * 100)}%`;
  }
  res.status(200).json({
    status: 'success',
    data: {
      activeUsersCount,
      uploadedFilesCount,
      percentageCompleted,
    },
  });
});
