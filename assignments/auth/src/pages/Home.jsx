import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = ({ logout }) => {
  const location = useLocation();
  const [name, setName] = useState("");

  useEffect(() => {
    if (location.state) {
      setName(location.state.name);
    }
  }, [location?.state?.name, setName]);
  return (
    <div>
      <button onClick={logout}>logout</button>
      <h1>Welcome, {name}</h1>
    </div>
  );
};

export default Home;
