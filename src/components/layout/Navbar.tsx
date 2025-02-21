import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">LearnTrack</Link>
      </div>
      
      <div className="navbar-menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assignments">Assignments</Link>
      </div>
      
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 