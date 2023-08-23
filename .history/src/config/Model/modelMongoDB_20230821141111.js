const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
});

const model = mongoose.model("Kitten", kittySchema);

module.exports = {
  model,
};
