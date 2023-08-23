const root = require("express").Router();

const { home } = require("./home.router");
const { create } = require("./create.router");
const { getAllUser } = require("./user.router");

root.use("/", home);
root.use("/create", create);

root.use("/user", getAllUser);

module.exports = root;
