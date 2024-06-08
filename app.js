/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// eslint-disable-next-line node/no-unpublished-require
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const globalErrorHandler = require('./controllers/error.controller');
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/review.routes');
const meetingRouter = require('./routes/meeting.routes');
const documentRouter = require('./routes/document.routes');
const notificationRouter = require('./routes/notification.routes');
const statisticsRouter = require('./routes/statistics.routes');
const AppError = require('./utils/appError');

const app = express();

app.use(cors());

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
app.use('/api/v1/documents', documentRouter);
app.use('/api/v1/notifications', notificationRouter);
app.use('/api/v1/statistics', statisticsRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
