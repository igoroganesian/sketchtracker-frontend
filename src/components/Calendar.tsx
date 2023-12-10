import React from 'react';
import { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('selectedDays');
    const initialValue = saved ? JSON.parse(saved) : [];
    return initialValue;
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  useEffect(() => {
    localStorage.setItem('selectedDays', JSON.stringify(selectedDays));
  }, [selectedDays]);

  const handleDayClick = (day: number) => {
    // if (selectedDays.includes(day)) {
    //   setSelectedDays(selectedDays.filter(d => d !== day));
    // } else {
    //   setSelectedDays([...selectedDays, day]);
    // }
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter(d => d !== day)
        : [...prevSelectedDays, day]
    );
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
      <a href='/' className='link-button'>Home</a>
    </div>
  );
};

export default Calendar;
