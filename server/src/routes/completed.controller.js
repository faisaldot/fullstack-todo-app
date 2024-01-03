const todoData = require("../model/db");
const { updateTodoSchema } = require("../types");

async function updateTodos(req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ error: "You send wrong inputs ☹" });
    return;
  }

  await todoData.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );

  res.json({ message: "Todo marked as completed" });
}

module.exports = updateTodos;
