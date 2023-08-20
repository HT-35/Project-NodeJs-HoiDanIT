const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("Connect successfully !!");
  } catch (error) {
    console.log("Connect fail: ", error.message);
  }
};

module.exports = { connect };
