import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="brand-icon">📚</span>
          <span className="brand-text">LearnTrack</span>
        </Link>
      </div>
      
      <div className="navbar-menu">
        <div className="search-bar">
          <input 
            type="search" 
            placeholder="Search assignments, tasks..."
            className="search-input"
          />
        </div>
      </div>
      
      <div className="navbar-end">
        <button className="notification-btn">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">3</span>
        </button>
        
        {user ? (
          <div className="user-menu">
            <img 
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
              alt={user.name}
              className="user-avatar"
            />
            <div className="user-dropdown">
              <Link to="/profile" className="dropdown-item">Profile</Link>
              <Link to="/settings" className="dropdown-item">Settings</Link>
              <button onClick={logout} className="dropdown-item text-danger">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="button button-primary">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 