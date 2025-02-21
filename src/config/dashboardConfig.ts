export type StatPeriod = 'day' | 'week' | 'month';

export interface DashboardStat {
  id: string;
  title: string;
  value: number;
  label: string;
  icon: string;
  color: string;
  unit?: string;
}

export const getStatsByPeriod = (period: StatPeriod): DashboardStat[] => [
  {
    id: 'completed-tasks',
    title: 'Completed Tasks',
    value: 12,
    label: `This ${period}`,
    icon: '✅',
    color: 'var(--success)'
  },
  {
    id: 'pending-tasks',
    title: 'Pending Tasks',
    value: 5,
    label: 'Due soon',
    icon: '⏳',
    color: 'var(--warning)'
  },
  {
    id: 'progress',
    title: 'Progress',
    value: 75,
    label: 'Completion rate',
    icon: '📈',
    color: 'var(--info)',
    unit: '%'
  },
  {
    id: 'study-time',
    title: 'Study Time',
    value: 24,
    label: `This ${period}`,
    icon: '⏰',
    color: 'var(--primary)',
    unit: 'h'
  }
];
