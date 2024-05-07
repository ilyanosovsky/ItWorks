import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

const FooBar = ({ element, isAuthenticated }) => {
  if (isAuthenticated) {
    return element;
  }

  return <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={
            <FooBar
              isAuthenticated={isAuthenticated}
              element={<Home logout={logoutHandler} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
