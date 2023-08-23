const Kitten = require("../config/Model/modelMongoDB");
const mongoose = require("mongoose");

const getAllUser = (req, res) => {
  const getAll = Kitten.find({});
};
