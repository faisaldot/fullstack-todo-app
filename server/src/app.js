const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todos.router");
const completedRouter = require("./routes/completed.router");
//--
// const { updateTodoSchema, createTodoSchema } = require("./types");
// const todoData = require("./model/db");

// Creating app
const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Routes
app.use("/todos", todosRouter);
app.use("/completed", completedRouter);

module.exports = app;
