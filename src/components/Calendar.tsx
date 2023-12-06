import React from 'react';
import { useState } from 'react';
import './Calendar.css';

const Calendar: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDayClick = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {daysInMonth.map(day => (
          <div
          key={day}
          className={`calendar-day${selectedDays.includes(day) ? ' selected' : ''}`}
          onClick={() => handleDayClick(day)}
        >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
