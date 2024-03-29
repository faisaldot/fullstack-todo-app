const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoData = mongoose.model("todo", todoSchema);

module.exports = todoData;
