import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}; 