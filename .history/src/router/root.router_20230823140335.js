const express = require("express");
const root = express.Router();

const { home } = require("./home.router");
// const userRouter = require("./user.router");
const { create } = require("./create.router");

root.use("/", home);
root.use("/create", create);
// root.use("/user", userRouter);

module.exports = { root };
