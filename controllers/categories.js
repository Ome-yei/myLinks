const categoriesRouter = require('express').Router();
const { Categorie } = require('../models/useful_links');

categoriesRouter.get('/', (req, res) => {
  Categorie.find({}).then((categories) => {
    res.json(categories);
  });
});

// Post, when user wants to create a new categorie(tag)
categoriesRouter.post('/', (req, res, next) => {
  const { name } = req.body;

  const categorie = new Categorie({
    name,
  });

  categorie.save().then((savedCategorie) => {
    res.json(savedCategorie);
  })
    .catch((error) => next(error));
});

module.exports = categoriesRouter;
