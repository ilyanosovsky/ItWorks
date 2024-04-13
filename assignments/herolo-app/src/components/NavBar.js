import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default NavBar;
