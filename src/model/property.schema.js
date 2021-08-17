const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = { Property };
