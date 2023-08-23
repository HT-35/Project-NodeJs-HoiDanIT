const getAllUser = require("../controller/User.controller");

const user = require("express").Router();

user.get("/getall", getAllUser);

module.exports = user;
