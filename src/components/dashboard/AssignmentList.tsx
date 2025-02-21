import { motion } from 'framer-motion';

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
  priority: 'high' | 'medium' | 'low';
  subject: string;
}

const AssignmentList = () => {
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Mathematics Assignment - Linear Algebra',
      subject: 'Mathematics',
      dueDate: '2024-03-15',
      status: 'pending',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Physics Lab Report - Wave Motion',
      subject: 'Physics',
      dueDate: '2024-03-18',
      status: 'pending',
      priority: 'medium'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return '⭐';
      case 'completed': return '✅';
      case 'overdue': return '⚠️';
      default: return '📝';
    }
  };

  const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'mathematics': return '📐';
      case 'physics': return '⚡';
      default: return '📚';
    }
  };

  return (
    <motion.div 
      className="assignments-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {assignments.map((assignment, index) => (
        <motion.div
          key={assignment.id}
          className={`assignment-card ${assignment.priority}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="assignment-content">
            <div className="assignment-info">
              <div>
                <h3>{assignment.title}</h3>
                <div className="assignment-meta">
                  <span className="subject-tag">
                    {getSubjectIcon(assignment.subject)} {assignment.subject}
                  </span>
                  <span className={`status-badge ${assignment.status}`}>
                    <span className="status-icon">{getStatusIcon(assignment.status)}</span>
                    <span className="status-text">{assignment.status}</span>
                  </span>
                  <span className="due-date">
                    📅 Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="assignment-actions">
            <button className="btn-action">
              👁️ View Details
            </button>
            <button className="btn-action">
              ✏️ Edit
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AssignmentList; 