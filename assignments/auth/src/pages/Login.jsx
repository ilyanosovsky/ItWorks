import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockFetchUserService from '../utils/mockFetchUserService';

const Login = ({ login }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const result = await mockFetchUserService(username, password);
      if (result.name === "bob") {
        login();
        navigate("/home", { state: { name: result.name } });
      }
    } catch (error) {
      console.error("??", error);
      setErrorMessage(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : ""}
    </div>
  );
};

export default Login;
