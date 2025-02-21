interface ProgressChartProps {
  period: 'day' | 'week' | 'month';
}

const ProgressChart = ({ period }: ProgressChartProps) => {
  return (
    <div className="progress-chart-container">
      <h2>Progress Overview</h2>
      <div className="chart-placeholder">
        {/* We'll implement actual charts later */}
        <p>Progress visualization for {period}</p>
      </div>
    </div>
  );
};

export default ProgressChart; 