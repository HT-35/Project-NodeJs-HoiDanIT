const mongoose = require("mongoose");

const connect = async () => {
  try {
    // database name : Project
    await mongoose.connect(
      "mongodb+srv://root:huyA0123@cluster0.ubusstj.mongodb.net/Project?retryWrites=true&w=majority"
    );
    console.log("Connect successfully !!");
  } catch (error) {
    console.log("Connect fail: ", error.message);
  }
};

module.exports = { connect };
