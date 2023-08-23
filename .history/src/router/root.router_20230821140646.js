const root = require("express").Router();

const { home } = require("./home.router");

root.use("/", home);

module.exports = {
  root,
};
