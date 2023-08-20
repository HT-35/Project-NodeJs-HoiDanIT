const express = require("express");

const app = express(); // app express

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get(":/slug", (req, res) => {
  res.send("404 notfound !!");
});

app.listen("3000", () => {
  console.log(`địa chỉ:  http://localhost:3000`);
});
