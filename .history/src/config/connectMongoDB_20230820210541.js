const require = createRequire(import.meta.url);

const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
  } catch (error) {
    console.log(error);
  }
};
