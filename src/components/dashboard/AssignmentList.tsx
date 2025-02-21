interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
  priority: 'high' | 'medium' | 'low';
}

const AssignmentList = () => {
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Mathematics Assignment',
      dueDate: '2024-03-15',
      status: 'pending',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Physics Lab Report',
      dueDate: '2024-03-18',
      status: 'pending',
      priority: 'medium'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="assignments-container">
      <h2>Upcoming Assignments</h2>
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className={`assignment-card ${assignment.priority}`}>
            <h3>{assignment.title}</h3>
            <div className="assignment-details">
              <span className={`status ${assignment.status}`}>
                {assignment.status}
              </span>
              <span className="due-date">
                Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList; 