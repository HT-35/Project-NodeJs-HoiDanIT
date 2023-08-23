const getAllUser = require("../controller/User.controller");

const user = require("express").Router();

user.get("/", getAllUser);

module.exports = user;
