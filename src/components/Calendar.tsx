import React from 'react';
import { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar: React.FC = () => {
  const [currentDate] = useState(new Date());
  const monthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const [selectedDays, setSelectedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('selectedDays');
    const initialValue = saved ? JSON.parse(saved) : [];
    return initialValue;
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    localStorage.setItem('selectedDays', JSON.stringify(selectedDays));
  }, [selectedDays]);

  const handleDayClick = (day: number) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter(d => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <div className="calendar-container">
      <h2>{`${currentMonth} ${currentYear}`}</h2>
      <div className="calendar-header">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {daysArray.map(day => (
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
