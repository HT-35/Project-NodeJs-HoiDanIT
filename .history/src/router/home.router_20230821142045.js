const home = require("express").Router();

home.get("/", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

module.exports = {
  home,
};
