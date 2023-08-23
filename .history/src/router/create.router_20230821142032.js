const { createUser } = require("../controller/createUser.controller");

const createRouter = require("express").Router();

createRouter.get("/", createUser);

module.exports = createRouter;
