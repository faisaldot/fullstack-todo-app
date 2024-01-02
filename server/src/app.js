const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");

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
app.post("/todos", (req, res) => {
  const payload = createTodo.safeParse(req.body);
  if (!payload.success) {
    res.status(411).json({ error: "You send a wrong inputs ☹" });
  }
  return;
});

app.get("/todos", (req, res) => {
  res.send({ name: "Faisal Mahmud" });
});

app.put("/completed", (req, res) => {
  const payload = updateTodo.safeParse(req.body);
  if (!payload.success) {
    res.status(411).json({ error: "You send wrong inputs ☹" });
  }
});

module.exports = app;
