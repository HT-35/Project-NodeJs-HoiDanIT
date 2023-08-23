const home = require("express").Router();

home.get("/home", (req, res) => {
  res.render("index.ejs", { name: "Tran Quang Huy" });
});

home.get("/:slug", (req, res) => {
  res.send("404 notfound !!");
});

module.exports = {
  home,
};
