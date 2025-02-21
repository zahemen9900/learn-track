import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StatCard } from './StatCard';
import { getStatsByPeriod, type StatPeriod } from '../../config/dashboardConfig';

interface DashboardStatsProps {
  period: StatPeriod;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const DashboardStats = ({ period }: DashboardStatsProps) => {
  const stats = getStatsByPeriod(period);

  return (
    <motion.div
      className="stats-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <StatCard key={stat.id} stat={stat} index={index} />
      ))}
    </motion.div>
  );
};

export default DashboardStats;