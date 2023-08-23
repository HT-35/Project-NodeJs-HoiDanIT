const root = require("express").Router();

const { home } = require("./home.router");
const { create } = require("./create.router");

root.use("/", home);
root.use("/create", create);

module.exports = root;
