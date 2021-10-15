const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const middleware = require('./utils/middleware');
const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

const usefulLinksRouter = require('./controllers/useful_links');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/usefulLinks', usefulLinksRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
