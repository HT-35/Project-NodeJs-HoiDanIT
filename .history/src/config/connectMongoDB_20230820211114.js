const mongoose = require("mongoose");

const connectmongoDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/f8_education_dev")
      .then(() => console.log("Connected!"));
    // console.log("connect mongoDB succesfully !!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectmongoDB };
