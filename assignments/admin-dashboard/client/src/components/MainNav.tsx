import DialogForm from "./DialogForm";
// import { Button } from "./ui/button";

const MainNav = () => {

  const handleLogin = (username: string, password: string) => {
    // Call your login function here with username and password
    console.log('Logging in with username:', username, 'and password:', password);
  };
  return (
    <>
      {/* <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button> */}
      <DialogForm onLogin={handleLogin}/>
    </>
  );
};

export default MainNav;
