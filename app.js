/* eslint-disable import/order */
const express = require('express');

const globalErrorHandler = require('./controllers/error.controller');
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/review.routes');
const meetingRouter = require('./routes/meeting.routes');

const app = express();
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const AppError = require('./utils/appError');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/meetings', meetingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
