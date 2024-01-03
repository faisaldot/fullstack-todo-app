const express = require("express");
const { getTodos, postTodos } = require("./todos.controller");

const todosRouter = express.Router();

todosRouter.get("/", getTodos);
todosRouter.post("/", postTodos);

module.exports = todosRouter;
