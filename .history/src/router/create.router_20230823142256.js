const express = require("express");
const create = express.Router();

const { createUser } = require("../controller/createUser.controller");

create.get("/", createUser);

module.exports = create;
