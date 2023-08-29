const express = require("express");
const root = express.Router();

const homeRouter = require("./home.router");

const customer = require("./customer.router");

root.use("/", homeRouter);

root.use("/customer", customer);

module.exports = root;
