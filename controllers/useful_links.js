const usefulLinksRouter = require('express').Router();
const UsefulLinks = require('../models/useful_links');

usefulLinksRouter.get('/', (req, res) => {
  res.json({ message: 'Hello I am root route' });
});

module.exports = usefulLinksRouter;
