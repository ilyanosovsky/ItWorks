import Login from "./Login";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { token } = useAuth();

  const handleLoginSuccess = () => {
    console.log("Handle successful login");
  };
  return (
    <div className="flex items-center">
      {token ? (
        <>
          <Link
            to="/dashboard"
            className="font-bold hover:text-orange-500 mr-3"
          >
            View Users
          </Link>
          <Link to="/create-user" className="font-bold hover:text-orange-500">
            Create User
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default MainNav;
