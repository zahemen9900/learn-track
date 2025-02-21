import { useState } from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import AssignmentList from '../components/dashboard/AssignmentList';
import ProgressChart from '../components/dashboard/ProgressChart';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('week');

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <select 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.target.value as 'day' | 'week' | 'month')}
        >
          <option value="day">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>
      
      <DashboardStats period={selectedPeriod} />
      <div className="dashboard-grid">
        <AssignmentList />
        <ProgressChart period={selectedPeriod} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 