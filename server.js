require('dotenv').config();
const express = require('express');
const config = require('./config');
const configureMiddleware = require('./middleware');
const configureRoutes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

const app = express();

configureMiddleware(app);
configureRoutes(app);
app.use(errorHandler);

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(config.PORT) || 9030;

const server = app.listen(PORT, HOST, () => {
  connectDB();
  console.log(`🚀 Server running on http://${HOST}:${PORT} (${config.NODE_ENV})`);
});

const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down...`);
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000);
};

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  gracefulShutdown('UNHANDLED_REJECTION');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  gracefulShutdown('UNCAUGHT_EXCEPTION');
});

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = { app, server };
