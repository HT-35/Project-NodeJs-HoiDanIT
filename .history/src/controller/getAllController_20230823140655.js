const Kitten = require("../config/Model/modelMongoDB");
const mongoose = require("mongoose");

const getAllUserController = async (req, res) => {
  const getall = await Kitten.find({});
  console.log(getall);
  res.send(getall);
};

module.exports = { getAllUserController };
