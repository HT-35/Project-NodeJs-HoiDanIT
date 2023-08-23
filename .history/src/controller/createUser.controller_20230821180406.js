const mongoose = require("mongoose");

// const database = require("../config/db/connectMongoDB");
const { Kitten } = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  try {
    await Kitten.create({ name: "small" });
    console.log("Người dùng mới đã được tạo:");
    res.send("Đã thêm mới thành công");
  } catch (error) {
    console.error("Lỗi khi thêm mới người dùng:", error);
    res.status(500).send("Có lỗi xảy ra khi thêm mới người dùng");
  }
};

module.exports = {
  createUser,
};
