// const getAllUser = require("express").Router();
const getAllUser = require("express").Router();
const getAllUserController = require("../controller/getAllController");

getAllUser.get("/get-all-user", getAllUserController);
module.exports = { getAllUser };
