const usefulLinksRouter = require('express').Router();
const { UsefulLink } = require('../models/useful_links');

// get all links
// What if a category is passed but there is none? making the filterby to return an empty array.
usefulLinksRouter.get('/', (req, res) => {
  if (req.query.filterby === undefined) {
    UsefulLink.find({}).sort({ clicks: -1 }).then((links) => {
      res.json(links);
    });
  } else {
    const category = req.query.filterby.replace(/['"]+/g, '');
    UsefulLink.find({ categories: { $all: [category] } }).then((links) => {
      res.json(links);
    });
  }
});

// get one link
usefulLinksRouter.get('/:id', (req, res, next) => {
  UsefulLink.findById(req.params.id).then((link) => {
    if (link) {
      res.json(link);
    } else {
      res.status(404).end();
    }
  })
    .catch((error) => next(error));
});

// post one link
usefulLinksRouter.post('/', (req, res, next) => {
  const {
    title, url, note, categories,
  } = req.body;

  const link = new UsefulLink({
    title,
    url,
    note,
    clicks: 0,
    categories,
    date: new Date(),
  });

  link.save().then((savedLink) => {
    res.json(savedLink);
  })
    .catch((error) => next(error));
});

// delete one link
usefulLinksRouter.delete('/:id', (req, res, next) => {
  const linkId = req.params.id;

  UsefulLink.findByIdAndRemove(linkId)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

// put one link
usefulLinksRouter.put('/:id', (req, res, next) => {
  const {
    title, url, note, categories,
  } = req.body;

  const link = {
    title,
    url,
    note,
    clicks: 0,
    categories,
    date: new Date(),
  };

  UsefulLink.findByIdAndUpdate(req.params.id, link, { new: true, runValidators: true })
    .then((updatedLink) => {
      res.json(updatedLink);
    })
    .catch((error) => next(error));
});
module.exports = usefulLinksRouter;
