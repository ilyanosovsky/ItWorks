export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;