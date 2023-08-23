const { createUser } = require("../controller/createUser.controller");

const createRouter = require("express").Router();

createRouter.get("/create", createRouter);
