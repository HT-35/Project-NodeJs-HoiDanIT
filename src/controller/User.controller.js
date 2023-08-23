const Kitten = require("../config/Model/modelMongoDB");
const mongoose = require("mongoose");

const getAllUser = async (req, res) => {
  const getAll = await Kitten.find({});
  // console.log(getAll);
  // res.send("KQ");

  res.status(200).json(getAll);
};

module.exports = getAllUser;
