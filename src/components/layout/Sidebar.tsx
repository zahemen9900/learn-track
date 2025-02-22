import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MdDashboard, 
  MdAssignment, 
  MdCalendarToday, 
  MdInsights,
  MdSettings,
  MdMenuBook,
  MdBookmark
} from 'react-icons/md';

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const Sidebar = () => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { path: '/dashboard', icon: <MdDashboard size={20} />, label: 'Dashboard' },
    { path: '/assignments', icon: <MdAssignment size={20} />, label: 'Assignments' },
    { path: '/calendar', icon: <MdCalendarToday size={20} />, label: 'Calendar' },
    { path: '/progress', icon: <MdInsights size={20} />, label: 'Progress' },
    { path: '/settings', icon: <MdSettings size={20} />, label: 'Settings' }
  ];

  const quickAccess = [
    { icon: <MdMenuBook size={20} />, label: 'Study Materials', onClick: () => {} },
    { icon: <MdBookmark size={20} />, label: 'Pinned Items', onClick: () => {} }
  ];

  return (
    <motion.aside 
      className="sidebar"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="sidebar-content">
        <div className="logo-container">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="logo-text"
          >
            LearnTrack
          </motion.h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-title">Menu</h3>
            <ul className="nav-list">
              {menuItems.map(item => (
                <motion.li 
                  key={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {location.pathname === item.path && (
                      <motion.div 
                        className="active-indicator"
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="nav-section quick-access">
            <h3 className="nav-title">Quick Access</h3>
            <ul className="nav-list">
              {quickAccess.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="nav-link">
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;