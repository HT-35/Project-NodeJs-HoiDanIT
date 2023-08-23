// const getAllUser = require("express").Router();
const getAllUser = require("express").Router();
const getAllUserController = require("../controller/getAllController");

getAllUser.get("/getall", getAllUserController);
module.exports = { getAllUser };
