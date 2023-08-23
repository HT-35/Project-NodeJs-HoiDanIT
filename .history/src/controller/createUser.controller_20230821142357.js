const mongoose = require("mongoose");
const Model = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  await Model.create({ name: "1 Phuong" });

  res.json(arr);
};

module.exports = {
  createUser,
};
