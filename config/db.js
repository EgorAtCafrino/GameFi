/**
 * Optional MongoDB connection.
 * Demo mode uses in-memory mock data — no database required.
 */
const connectDB = async () => {
  const config = require('../config');
  const uri = process.env.MONGO_URI || config.MONGO_URI;

  if (!uri) {
    console.log('ℹ️  Running without MongoDB (mock data mode).');
    return;
  }

  try {
    // Lazy-load so mongoose is not required for demo installs
    const mongoose = require('mongoose');
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.warn('⚠️  MongoDB unavailable — continuing with mock data:', err.message);
  }
};

module.exports = connectDB;
