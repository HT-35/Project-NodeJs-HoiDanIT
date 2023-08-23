const mongoose = require("mongoose");

// const database = require("../config/db/connectMongoDB");
const { Kitten } = require("../config/Model/modelMongoDB");

const createUser = async (req, res) => {
  try {
    const newUser = await Kitten.create({ name: "small" });
    console.log("Người dùng mới đã được tạo:", newUser);
    res.send(newUser);
  } catch (error) {
    console.error("Lỗi khi thêm mới người dùng:", error);
    res.status(500).send("Có lỗi xảy ra khi thêm mới người dùng");
  }
};

module.exports = {
  createUser,
};
