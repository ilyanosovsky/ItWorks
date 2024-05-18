import { useState } from "react";
import Login from "./Login";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";
import CreateUserForm from "./CreateUserForm";
import { useUsers } from "@/context/UserProvider";
import { User } from "@/api/UserApi";

const MainNav = () => {
  const { token } = useAuth();
  const { setUsers, fetchUsers } = useUsers();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginSuccess = () => {
    console.log("Handle successful login");
  };

  const handleUserCreated = (newUser: User) => {
    setIsOpen(false);
    setUsers((prevUsers) => [...prevUsers, newUser]);
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
          <CreateUserForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onUserCreated={handleUserCreated}
          />
          <UsernameMenu />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default MainNav;
