const { Model } = require("./src/config/Model/modelMongoDB");

const createUser = async () => {
  await Model.insertMany([
    { name: "Phuong" },
    { name: "Huy" },
    { name: "Huy Phuong" },
  ]);
};
cat();
