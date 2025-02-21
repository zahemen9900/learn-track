import { useState } from 'react';

const Assignments = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="assignments-page">
      <div className="assignments-header">
        <h1>Assignments</h1>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
      
      <div className="assignments-content">
        {/* Assignment content will be implemented later */}
        <p>Assignments list will be displayed here</p>
      </div>
    </div>
  );
};

export default Assignments; 