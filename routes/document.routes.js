const express = require('express');
const {
  uploadDocuments,
  uploadUserDocuments,
  downloadDocuments,
  addReviewers,
  updateReviewerStatus,
  getDocuments,
  getDocumentsByUser,
  sendStatus,
  getDocument,
  updateDocuments,
} = require('../controllers/document.controller');
const { authorize, restrictTo } = require('../middlewares/auth.middleware');

const router = express.Router();

router
  .route('/')
  .post(authorize, uploadUserDocuments, uploadDocuments)
  .get(authorize, getDocuments);

router.get('/user', authorize, getDocumentsByUser);

router
  .route('/:documentId')
  .get(getDocument)
  .patch(authorize, uploadUserDocuments, updateDocuments);

router.get('/download/:filename', downloadDocuments);

router.patch(
  '/:documentId/reviewers',
  authorize,
  restrictTo('admin'),
  addReviewers,
);

router.patch(
  '/:documentId/status',
  authorize,
  restrictTo('reviewer'),
  updateReviewerStatus,
);

router.patch(
  '/:documentId/status/send',
  authorize,
  restrictTo('admin'),
  sendStatus,
);

module.exports = router;
