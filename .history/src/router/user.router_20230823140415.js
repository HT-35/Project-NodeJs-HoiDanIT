const getAllUserController = require("../controller/getAllController");
const express = require("express");
const getAllUser = express.Router();

getAllUser.get("/getall", getAllUserController);

module.exports = getAllUser;
