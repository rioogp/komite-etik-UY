/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const Review = require('../models/review.model');
const catchAsync = require('../utils/catchAsync');
const { format } = require('date-fns');

exports.getReviews = catchAsync(async (req, res) => {
  const totalReviews = await Review.countDocuments();
  const randomSkip = Math.floor(Math.random() * (totalReviews - 8));
  const reviews =
    totalReviews < 8
      ? await Review.find()
      : await Review.aggregate([
          { $sample: { size: totalReviews } },
          { $skip: randomSkip },
          { $limit: 8 },
        ]);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res) => {
  const review = await Review.create({
    name: req.body.name,
    description: req.body.description,
    createdAt: format(req.requestTime, 'dd MMM yy'),
  });

  res.status(201).json({
    status: 'success',
    data: {
      review,
    },
  });
});
