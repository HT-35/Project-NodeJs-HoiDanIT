// const getAllUser = require("express").Router();
const getAllUserController = require("../controller/getAllController");
const getAllUser = require("express").Router();

getAllUser.get("/getall", getAllUserController);
getAllUser.get("/getall", createUser);
module.exports = { getAllUser };
