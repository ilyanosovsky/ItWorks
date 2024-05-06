import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello Guest");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setGreeting(`Hello ${name}`);
    setName("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
        <form onSubmit={submitHandler}>
          <input
            placeholder="type your name"
            type="text"
            onChange={changeHandler}
          />
          <button type="submit">Submit form</button>
        </form>
      </header>
    </div>
  );
}

export default App;
