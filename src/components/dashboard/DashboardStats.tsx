interface DashboardStatsProps {
  period: 'day' | 'week' | 'month';
}

const DashboardStats = ({ period }: DashboardStatsProps) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Completed Tasks</h3>
        <p className="stat-number">12</p>
        <p className="stat-label">This {period}</p>
      </div>
      
      <div className="stat-card">
        <h3>Pending Tasks</h3>
        <p className="stat-number">5</p>
        <p className="stat-label">Due soon</p>
      </div>
      
      <div className="stat-card">
        <h3>Progress</h3>
        <p className="stat-number">75%</p>
        <p className="stat-label">Completion rate</p>
      </div>
      
      <div className="stat-card">
        <h3>Study Time</h3>
        <p className="stat-number">24h</p>
        <p className="stat-label">This {period}</p>
      </div>
    </div>
  );
};

export default DashboardStats; 