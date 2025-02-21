import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  type: 'assignment' | 'exam' | 'study';
  description?: string;
}

const Calendar = () => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  
  // Mock events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Mathematics Assignment',
      date: '2024-03-15',
      type: 'assignment',
      description: 'Complete chapters 5-7'
    },
    {
      id: '2',
      title: 'Physics Exam',
      date: '2024-03-20',
      type: 'exam',
      description: 'Midterm examination'
    }
  ];

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h1>Calendar</h1>
        <div className="calendar-controls">
          <div className="view-controls">
            <button 
              className={view === 'month' ? 'active' : ''} 
              onClick={() => setView('month')}
            >
              Month
            </button>
            <button 
              className={view === 'week' ? 'active' : ''} 
              onClick={() => setView('week')}
            >
              Week
            </button>
            <button 
              className={view === 'day' ? 'active' : ''} 
              onClick={() => setView('day')}
            >
              Day
            </button>
          </div>
          <button className="add-event-btn">+ Add Event</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-sidebar">
          <div className="upcoming-events">
            <h3>Upcoming Events</h3>
            {events.map(event => (
              <div key={event.id} className={`event-card ${event.type}`}>
                <div className="event-date">
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="event-title">{event.title}</div>
                <div className="event-type">{event.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendar-main">
          <div className="calendar-placeholder">
            <p>Calendar view will be implemented here</p>
            <p>Current view: {view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar; 