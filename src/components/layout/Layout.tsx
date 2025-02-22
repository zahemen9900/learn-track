import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
      <style>{`
        .layout {
          display: grid;
          grid-template-columns: auto 1fr;
          min-height: 100vh;
        }

        .sidebar {
          background: linear-gradient(180deg, #1a1c23 0%, #121317 100%);
          width: 280px;
          padding: 1.5rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .logo-container {
          padding: 0.5rem 0;
        }

        .logo-text {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(90deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }

        .nav-section {
          margin-bottom: 2rem;
        }

        .nav-title {
          color: #64748b;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 0.75rem 1rem;
          color: #94a3b8;
          text-decoration: none;
          border-radius: 8px;
          position: relative;
          transition: all 0.2s ease;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          background: transparent;
          font-size: 0.9375rem;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }

        .nav-link.active {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
        }

        .nav-label {
          font-weight: 500;
        }

        .active-indicator {
          position: absolute;
          left: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #6366f1;
          border-radius: 0 4px 4px 0;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .main-content {
          padding: 2rem;
          background: #0f1015;
        }

        .quick-access {
          margin-top: auto;
           padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Scrollbar styling */
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: transparent;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Layout;
