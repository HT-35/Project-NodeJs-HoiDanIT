const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/f8_education_dev",
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    console.log("Connect fail !!");
  }
};

module.exports = { connect };
