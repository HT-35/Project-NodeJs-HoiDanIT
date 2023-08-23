const root = require("express").Router();

const { home } = require("./home.router");

root.get("/");

module.exports = {
  home,
};
