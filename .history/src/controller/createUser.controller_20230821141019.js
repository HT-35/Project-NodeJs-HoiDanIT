const model = require("../config/Model/modelMongoDB");

const createUser = (req, res) => {
  const cat = async () => {
    await Kitten.insertMany([
      { name: "Phuong" },
      { name: "Huy" },
      { name: "Huy Phuong" },
    ]);
  };
  cat();
};
