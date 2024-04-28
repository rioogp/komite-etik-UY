/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcryptjs');

exports.hashingPassword = async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
};

exports.savePasswordChangeAt = function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
};
