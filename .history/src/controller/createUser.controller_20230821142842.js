// const mongoose = require("mongoose");

const Model = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  //   await Model.create({ name: "1 Phuong" });
  await Model.create({ name: "small" });

  res.send("đã thêm mới thành công");
};

module.exports = {
  createUser,
};
