const express = require("express");
const path = require("path");

const database = require("./src/config/db/connectMongoDB");
const { Kitten } = require("./src/config/Model/modelMongoDB");

database.connect();

// const cat = new Kitten({ name: "silence" });

const cat = async () => {
  await Kitten.insertMany([
    { name: "Phuong" },
    { name: "Huy" },
    { name: "Huy Phuong" },
  ]);
};
cat();

// biến môi trường
require("dotenv").config();

const app = express(); // app express

// nếu port trong process có vấn đề thì sẽ lấy port 3050
const PORT = process.env.PORT || 3050;
// const PORT = 3050;
//set file views
app.set("views", "./src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

//set static public
app.use("/public", express.static(path.join(__dirname, "./src/public")));

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
