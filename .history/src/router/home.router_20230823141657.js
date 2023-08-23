const express = require("express");
const home = express.Router();

home.get("/", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

module.exports = {
  home,
};
