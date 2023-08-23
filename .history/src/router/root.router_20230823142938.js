const express = require("express");
const root = express.Router();

const homeRouter = require("./home.router");
const createRouter = require("./create.router");

const user = require("./user.router");

root.use("/", homeRouter);
root.use("/create", createRouter);
root.use("/user", user);

module.exports = root;
