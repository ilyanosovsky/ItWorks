export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {todo.title}
            </span>{" "}
            @ {new Date(todo.createdAt).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
