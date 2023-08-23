const mongoose = require("mongoose");
const Model = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  const arr = [
    { name: "1 Phuong" },
    { name: "1 Huy" },
    { name: "1 Huy Phuong" },
  ];
  await Model.create({ name: "1 Phuong" });

  res.json(arr);
};

module.exports = {
  createUser,
};
