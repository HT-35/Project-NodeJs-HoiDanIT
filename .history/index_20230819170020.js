const express = require("express");
// biến môi trường
require("dotenv").config();

const app = express(); // app express
const PORT = process.env.PORT || 3050;

//set file views
app.set("views", "./src/views");
// cấu hình virew engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

app.get("/:slug", (req, res) => {
  res.send("404 notfound !!");
});

app.listen(PORT, () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
