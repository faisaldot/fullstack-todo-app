const express = require("express");
const updateTodos = require("./completed.controller");

const completedRouter = express.Router();

completedRouter.put("/", updateTodos);

module.exports = completedRouter;
