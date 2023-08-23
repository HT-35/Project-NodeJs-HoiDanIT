const { createUser } = require("../controller/createUser.controller");

const create = require("express").Router();

create.get("/", createUser);

module.exports = create;
