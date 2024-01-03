import { useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [
  { id: 1, title: "Going to field" },
  { id: 2, title: "Buy some fruits" },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initialState);
  const [nextTodo, setNextTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: nextTodo,
      },
    ]);
    setNextTodo("");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>⏭ List your next todo</h2>
        <label htmlFor="todo-input">What needs to be done?</label>
        <input
          id="todo-input"
          onChange={(event) => setNextTodo(event.target.value)}
        />
      </form>
      <ol>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ol>
    </main>
  );
}
