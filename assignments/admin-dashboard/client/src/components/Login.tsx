import React from 'react';
import { loginAdmin } from '../api/AdminApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import LoginForm from './LoginForm';
import { toast } from "@/components/ui/use-toast";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const token = await loginAdmin(username, password);
      login(token, username);
      toast({
        title: "Login successful",
        description: "You have successfully logged in.",
        variant: "default",
      });
      onLoginSuccess();
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login failed",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <LoginForm onLogin={handleLogin} />
  );
};

export default Login;
