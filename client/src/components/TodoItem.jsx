export default function TodoItem({ item }) {
  return (
    <>
      <li>
        <input type="checkbox" id={item.id} />
        <label htmlFor="todo-1">{item.title}</label>
      </li>
    </>
  );
}
