import React from 'react';
import { loginAdmin } from '../api/AdminApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import LoginForm from './LoginForm';

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
      console.log('Login successful! with token ->', token);
      console.log('username ->', username);
      onLoginSuccess();
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Login failed:', error.message);
      } else {
        console.error('Login failed:', error);
      }
    }
  };

  return (
    <LoginForm onLogin={handleLogin} />
  );
};

export default Login;
