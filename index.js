const express = require("express");
const path = require("path");
const app = express(); // app express
const multer = require("multer");
const bodyParser = require("body-parser");
// ...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const { root } = require("./src/router/root.router");

const root = require("./src/router/root.router");

const database = require("./src/config/db/connectMongoDB");

database.connect();

// biến môi trường
require("dotenv").config();

// gửi dữ liệu từ FORM lên server
app.use(
  express.urlencoded({
    extended: true,
  })
);
// gửi dữ liệu từ famework, postman,axios,.... lên server
app.use(express.json());

// nếu port trong process có vấn đề thì sẽ lấy port 3050
const PORT = process.env.PORT || 3050;
// const PORT = 3050;
//set file views
app.set("views", "./src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

//set static public
app.use("/public", express.static(path.join(__dirname, "./src/public")));

// set router
app.use("/", root);

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
