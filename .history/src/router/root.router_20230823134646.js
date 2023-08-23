const root = require("express").Router();

const { home } = require("./home.router");
const { getAllUser } = require("./user.router");

const createRouter = require("./create.router");

root.use("/", home);
root.use("/create", createRouter);

root.use("/user", getAll);

module.exports = {
  root,
};
