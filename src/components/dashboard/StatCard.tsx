import { motion } from 'framer-motion';
import type { DashboardStat } from '../../config/dashboardConfig';

interface StatCardProps {
  stat: DashboardStat;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15
    }
  })
};

const valueVariants = {
  hidden: { scale: 0 },
  visible: (index: number) => ({
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: index * 0.15 + 0.2
    }
  })
};

export const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      className="stat-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      style={{ margin: '0 auto' }} // Center card in grid
    >
      <div className="stat-header">
        <span className="stat-icon" style={{ color: stat.color }}>
          {stat.icon}
        </span>
        <h3>{stat.title}</h3>
      </div>
      
      <motion.div
        className="stat-value-wrapper"
        variants={valueVariants}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <div className="stat-number" style={{ color: stat.color }}>
          {stat.value}{stat.unit}
        </div>
        <div className="stat-progress-ring">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <motion.path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={stat.color}
              strokeWidth="2" // Slightly thicker stroke
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stat.value / 100 }}
              transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
            />
          </svg>
        </div>
      </motion.div>
      
      <p className="stat-label">{stat.label}</p>
    </motion.div>
  );
};
