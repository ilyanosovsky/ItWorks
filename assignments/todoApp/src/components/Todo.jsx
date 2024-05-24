import { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export const Todo = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  const uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      title,
      id: uuidv4(),
      done: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    addTodo(title);
  };

  // Function to clear all todos
  const clearTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form addTodo={submitHandler} />
      {todos.length ? <TodoList todos={todos} /> : <p>No todos</p>}
      <button onClick={clearTodos}>delete all</button>
    </>
  );
};

export default Todo;
