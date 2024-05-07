const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    required: [true, 'Name user must be provided'],
    trim: true,
    minlength: 1,
  },
  researchName: {
    type: String,
    required: [true, 'Research name must be provided'],
    trim: true,
    minlength: 1,
  },
  status: {
    type: String,
    trim: true,
    minlength: 1,
  },
  documents: {
    type: [String],
    required: [true, 'Documents must be provided'],
  },
  reviewers: [
    {
      reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      name: String,
      status: String,
      message: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
