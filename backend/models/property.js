const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Property = new Schema({
  title: String,
  description: String,
  image: String,
  contact: String,
});

module.exports = mongoose.model("Property", Property);
