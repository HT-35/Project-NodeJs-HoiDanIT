const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
});

const Model = mongoose.model("Kitten", kittySchema);

module.exports = {
  Model,
};
