import { useState } from "react";
import Login from "./Login";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";
import CreateUserForm from "./CreateUserForm";
import { useUsers } from "@/context/UserProvider";
import { User } from "@/api/UserApi";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const MainNav = () => {
  const { t, i18n } = useTranslation();
  const { token } = useAuth();
  const { setUsers, fetchUsers } = useUsers();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
            {t("nav.view")}
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
      <DropdownMenu>
        <DropdownMenuTrigger className="font-bold text-base hover:text-orange-500 hover:bg-white">
          {t("nav.language")}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("ru")}>
            Русский
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MainNav;
