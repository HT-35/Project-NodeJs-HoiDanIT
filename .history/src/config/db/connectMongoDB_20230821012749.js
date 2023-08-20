const mongoose = require("mongoose");

const connect = async () => {
  try {
    try {
      await mongoose.connect("mongodb://127.0.0.1:/f8_education_dev");
      console.log("Connect successfully !!");
    } catch (error) {
      console.log("Connect fail: ", error.message);
    }
  } catch (error) {}
};

module.exports = { connect };
