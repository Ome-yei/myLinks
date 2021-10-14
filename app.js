const express = require('express');
const mongoose = require('mongoose');

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

app.use(express.json());

app.use('/api/usefulLinks', usefulLinksRouter);

module.exports = app;
