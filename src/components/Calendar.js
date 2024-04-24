// Calendar.jsx
import React from 'react';

function Calendar({ onSelectPeriod }) {
  return (
    <div className="calendar-container" style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '50px', marginRight: '50px', marginTop: '-20px',backgroundColor:'rgb(244, 246, 246)' }}>
      <button className="calendar-button" onClick={() => onSelectPeriod('Day')}>Day</button>
      <button className="calendar-button" onClick={() => onSelectPeriod('Week')}>Week</button>
      <button className="calendar-button" onClick={() => onSelectPeriod('Month')}>Month</button>
      <button className="calendar-button" onClick={() => onSelectPeriod('Year')}>Year</button>
    </div>
  );
}

export default Calendar;
