import { loginAdmin } from '@/api/AdminApi';
import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
          const token = await loginAdmin(username, password);
          // Handle successful login, e.g., save token to localStorage and redirect
          console.log('Login successful. Token:', token);
        } catch (error) {
          setError(error.message);
        }
      };
  return (
    <div>
      
    </div>
  )
}

export default Login
