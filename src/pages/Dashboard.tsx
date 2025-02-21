import { useState } from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import AssignmentList from '../components/dashboard/AssignmentList';
import ProgressChart from '../components/dashboard/ProgressChart';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('week');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Dashboard</h1>
          <p className="text-muted">Welcome back! Here's your overview.</p>
        </div>
        <div className="header-right">
          <div className="select-wrapper">
            <select 
              className="period-select"
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value as 'day' | 'week' | 'month')}
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      </div>
      
      <DashboardStats period={selectedPeriod} />
      
      <motion.div 
        className="dashboard-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="content-section assignments-section">
          <div className="section-header">
            <h2>Upcoming Assignments</h2>
            <button className="btn-add"> Add Assignment</button>
          </div>
          <AssignmentList />
        </div>
        
        <div className="content-section progress-section">
          <div className="section-header">
            <h2>Progress Overview</h2>
            <div className="select-wrapper">
              <select className="view-select">
                <option value="weekly">Weekly View</option>
                <option value="monthly">Monthly View</option>
              </select>
            </div>
          </div>
          <ProgressChart period={selectedPeriod} />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 