/**
 * Optional Mongoose User model (not used in demo/mock-data mode).
 * Kept as a reference schema for production Mongo setups.
 */
const config = require('../config');

let User = null;

try {
  const mongoose = require('mongoose');
  const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chipsAmount: { type: Number, default: config.INITIAL_CHIPS_AMOUNT },
    type: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  });
  User = mongoose.models.User || mongoose.model('User', UserSchema);
} catch {
  // mongoose not installed — demo mode
}

module.exports = User;
