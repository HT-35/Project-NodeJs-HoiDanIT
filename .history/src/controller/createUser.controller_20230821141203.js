const { model } = require("mongoose");
const { Model } = require("./src/config/Model/modelMongoDB");

const createUser = async () => {
  await model.insertMany([
    { name: "Phuong" },
    { name: "Huy" },
    { name: "Huy Phuong" },
  ]);
};

module.exports = {
  createUser,
};
