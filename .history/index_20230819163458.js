const express = require("express");

const app = express(); // app express

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

app.listen("3000", () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
