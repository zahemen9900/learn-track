import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressChartProps {
  period: 'day' | 'week' | 'month';
}

const ProgressChart = ({ period }: ProgressChartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock data for the chart
  const progressData = {
    labels: period === 'week' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        tasks: [65, 75, 85, 70, 90, 80, 85],
        time: [2, 3, 4, 2.5, 3.5, 2, 1.5]
      }
    ]
  };

  const maxValue = Math.max(...progressData.datasets[0].tasks);
  const chartHeight = 200;

  // Generate grid lines with values
  const gridLines = [...Array(5)].map((_, i) => ({
    value: Math.round((maxValue / 4) * (4 - i)),
    position: i * 25
  }));

  return (
    <div className="progress-chart-container">
      <div className="chart-header">
        <div className="chart-metrics">
          <div className="metric">
            <span className="metric-value">85%</span>
            <span className="metric-label">Average Completion</span>
          </div>
          <div className="metric">
            <span className="metric-value">2.6h</span>
            <span className="metric-label">Daily Average</span>
          </div>
        </div>
      </div>

      <div className="chart-content">
        <div className="chart-grid">
          {gridLines.map((line, i) => (
            <div key={i} className="grid-line" style={{ bottom: `${line.position}%` }}>
              <span className="grid-value">{line.value}%</span>
            </div>
          ))}
        </div>

        <div className="chart-bars">
          {progressData.labels.map((label, index) => (
            <motion.div 
              key={label} 
              className="bar-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onHoverStart={() => setHoveredBar(index)}
              onHoverEnd={() => setHoveredBar(null)}
            >
              <motion.div 
                className="bar tasks-bar"
                initial={{ height: 0 }}
                animate={{ 
                  height: `${(progressData.datasets[0].tasks[index] / maxValue) * chartHeight}px`,
                  scale: hoveredBar === index ? 1.1 : 1
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <AnimatePresence>
                  {hoveredBar === index && (
                    <motion.div
                      className="bar-tooltip"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <strong>{progressData.datasets[0].tasks[index]}%</strong>
                      <span>{progressData.datasets[0].time[index]}h spent</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="bar-value">{progressData.datasets[0].tasks[index]}%</span>
              </motion.div>
              <span className="bar-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color tasks-color" />
          <span>Task Completion</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart; 