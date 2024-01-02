const express = require("express");
const cors = require("cors");
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
app.get("/", (req, res) => {
  res.send({ name: "Faisal Mahmud" });
});

module.exports = app;
