const zod = require("zod");

const createTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodoSchema = zod.object({
  id: zod.string(),
});

module.exports = { createTodoSchema, updateTodoSchema };

/* // --
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodoSchema.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todoData.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  // const todos = await todo.find({});

  res.json({
    todos: [],
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todoData.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
// -- */
