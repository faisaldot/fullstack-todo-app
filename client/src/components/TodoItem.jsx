export default function TodoItem({ item }) {
  return (
    <>
      <li>
        <input type="checkbox" id={item.id} />
        <label htmlFor={item.id}>{item.title}</label>
      </li>
    </>
  );
}
