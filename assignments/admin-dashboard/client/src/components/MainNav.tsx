import Login from './Login';
import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';

const MainNav = () => {
  const { token, username } = useAuth();

  const handleLoginSuccess = () => {
    console.log('Handle successful login');
  };
  return (
    <div className="flex items-center">
      {token ? (
        <Link to="/dashboard"><span>{username}</span></Link> 
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default MainNav;
