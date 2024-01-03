import TodoItem from "./TodoItem";

export default function TodoApp() {
  const initialTodo = [
    { id: 1, title: "Going to field" },
    { id: 2, title: "Buy some fruits" },
  ];
  return (
    <main>
      <form>
        <h2>⏭ List your next todo</h2>
        <label htmlFor="todo-input">What needs to be done?</label>
        <input id="todo-input" />
      </form>
      <ol>
        {initialTodo.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ol>
    </main>
  );
}
