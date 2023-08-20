const require = createRequire(import.meta.url);

const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    console.log(error);
  }
};
// mongoose
//   .connect("mongodb://127.0.0.1:27017/test")
//   .then(() => console.log("Connected!"));
