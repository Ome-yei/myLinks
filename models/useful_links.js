// Define Mongoose schema

const mongoose = require('mongoose');

const usefulLinkSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  note: {
    type: String,
  },
  importance: {
    type: Number,
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

module.exports = mongoose.model('UsefulLink', usefulLinkSchema);
