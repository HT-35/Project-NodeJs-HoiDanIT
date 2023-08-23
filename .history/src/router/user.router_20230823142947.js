const getAllUser = require("../controller/User.controller");

const user = require("express").Router();

user.get("/get-all-user", getAllUser);

module.exports = user;
