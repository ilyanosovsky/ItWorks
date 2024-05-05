export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title} {new Date(todo.createdAt).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;