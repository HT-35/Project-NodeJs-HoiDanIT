const express = require("express");
const root = express.Router();

const homeRouter = require("./home.router");
const createRouter = require("./create.router");

root.use("/", homeRouter);
root.use("/create", createRouter);

module.exports = root;
