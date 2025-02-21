import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard" className={isActive('/dashboard')}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/assignments" className={isActive('/assignments')}>
              Assignments
            </Link>
          </li>
          <li>
            <Link to="/calendar" className={isActive('/calendar')}>
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/progress" className={isActive('/progress')}>
              Progress
            </Link>
          </li>
          <li>
            <Link to="/settings" className={isActive('/settings')}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 