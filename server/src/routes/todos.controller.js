const todoData = require("../model/db");
const { createTodoSchema } = require("../types");

async function getTodos(req, res) {
  const todos = await todoData.find();
  res.json({ todos: [] });
}

async function postTodos(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodoSchema.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({ error: "You send a wrong inputs ☹" });
    return;
  }

  await todoData.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({ message: "Todo created" });
}

module.exports = { getTodos, postTodos };
