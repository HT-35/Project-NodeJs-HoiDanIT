const express = require("express");
const path = require("path");
const db = require("./src/config/connectDB");

db.connectDatabase();

const query = async () => {
  await db
    .connectDatabase()
    .query(
      'SELECT * FROM `hoidanit.Users` WHERE `name` = "hoidanit" AND `age` > 45',
      function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );
};

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

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

app.get("/:slug", (req, res) => {
  res.send("404 notfound !!");
});

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});