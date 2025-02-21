import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/assignments', icon: '📝', label: 'Assignments' },
    { path: '/calendar', icon: '📅', label: 'Calendar' },
    { path: '/progress', icon: '📈', label: 'Progress' },
    { path: '/settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-title">Menu</h3>
          <ul className="nav-list">
            {menuItems.map(item => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Quick Access</h3>
          <ul className="nav-list">
            <li>
              <button className="nav-item">
                <span className="nav-icon">📚</span>
                <span className="nav-label">Study Materials</span>
              </button>
            </li>
            <li>
              <button className="nav-item">
                <span className="nav-icon">📌</span>
                <span className="nav-label">Pinned Items</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 