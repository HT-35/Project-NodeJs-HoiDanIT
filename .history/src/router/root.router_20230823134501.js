const root = require("express").Router();

const { home } = require("./home.router");
const { getAll } = require("./GetAllApi");

const createRouter = require("./create.router");

root.use("/", home);

// root.use("/create", createRouter);

root.use("/create", createRouter);

module.exports = {
  root,
};
