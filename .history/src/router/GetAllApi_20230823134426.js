const getAll = require("express").Router();
const getAllUserController = require("../controller/getAllController");

getAll.get("/get-all-user", getAllUserController);
module.exports = getAll;