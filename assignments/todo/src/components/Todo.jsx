import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  };

  const todoFactory = (title) => {
    return {
      title,
      id: uuidv4(),
      done: false,
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const newTodo = todoFactory(title);

    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <Form addTodo={submitHandler} />
      {todos.length ? <TodoList todos={todos} /> : <p>No todos</p>}
      <button onClick={() => setTodos([])}>wipe</button>
    </>
  );
};

export default Todo;