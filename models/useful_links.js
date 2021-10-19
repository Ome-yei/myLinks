// Define Mongoose schema

const mongoose = require('mongoose');

const usefulLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
  },
  categories: [String],
});

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Format the objects returned by Mongoose
usefulLinkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

categoriesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const UsefulLink = mongoose.model('UsefulLink', usefulLinkSchema);
const Categorie = mongoose.model('Categorie', categoriesSchema);

module.exports = { UsefulLink, Categorie };
