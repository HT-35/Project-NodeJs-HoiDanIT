const root = require("express").Router();

const { home } = require("./home.router");
const { createRouter } = require("./create.router");
const { getAllUser } = require("./user.router");

root.use("/", home);
root.use("/create", createRouter);

root.use("/user", getAllUser);

module.exports = root;
