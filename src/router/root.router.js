const express = require("express");
const root = express.Router();

const projectRouter = require("./project.project");

// const homeRouter = require("./home.router");

// const customer = require("./customer.router");

// root.use("/", homeRouter);

// root.use("/customer", customer);

root.use("/", projectRouter);

module.exports = root;
