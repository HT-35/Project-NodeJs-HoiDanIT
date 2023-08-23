const express = require("express");
const root = express.Router();

const homeRouter = require("./home.router");
// const userRouter = require("./user.router");
const createRouter = require("./create.router");

root.use("/", homeRouter);
root.use("/create", createRouter);
// root.use("/user", userRouter);

module.exports = root;
