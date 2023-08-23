const express = require("express");
const root = express.Router();

const { home } = require("./home.router");
// const userRouter = require("./user.router");
const { createRouter } = require("./create.router");

root.use("/", home);
root.use("/create", createRouter);
// root.use("/user", userRouter);

module.exports = root;
