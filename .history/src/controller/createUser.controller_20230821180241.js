const mongoose = require("mongoose");

// const Model = require("../config/Model/modelMongoDB");

// const createUser = async (req, res) => {
//   //   await Model.create({ name: "1 Phuong" });
//   await Model.create({ name: "small" });

//   res.send("đã thêm mới thành công");
// };

// module.exports = {
//   createUser,
// };
const database = require("../config/db/connectMongoDB");
const { Model } = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  try {
    await Model.create({ name: "small" });
    console.log("Người dùng mới đã được tạo:", newUser);
    res.send("Đã thêm mới thành công");
  } catch (error) {
    console.error("Lỗi khi thêm mới người dùng:", error);
    res.status(500).send("Có lỗi xảy ra khi thêm mới người dùng");
  }
};

module.exports = {
  createUser,
};
