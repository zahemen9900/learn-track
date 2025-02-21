import { useState } from 'react';

const Progress = () => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'semester'>('week');

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>Progress Tracking</h1>
        <select 
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as 'week' | 'month' | 'semester')}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="semester">This Semester</option>
        </select>
      </div>

      <div className="progress-grid">
        <div className="progress-card">
          <h3>Completion Rate</h3>
          <div className="progress-circle">85%</div>
          <p>Tasks completed on time</p>
        </div>

        <div className="progress-card">
          <h3>Study Hours</h3>
          <div className="progress-stat">24h</div>
          <p>Total study time</p>
        </div>

        <div className="progress-card">
          <h3>Assignments</h3>
          <div className="progress-stat">12/15</div>
          <p>Completed assignments</p>
        </div>
      </div>

      <div className="progress-chart-section">
        <h2>Progress Over Time</h2>
        <div className="chart-placeholder">
          <p>Progress chart will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default Progress; 