import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Calendar.css';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const monthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  const currentMonthIndex = currentDate.getMonth();

  const [selectedDays, setSelectedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('selectedDays');
    const initialValue = saved ? JSON.parse(saved) : [];
    return initialValue;
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
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

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonthIndex - 1, 1));
    setSelectedDays([]);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonthIndex + 1, 1));
    setSelectedDays([]);
  };

  return (
    <div className="calendar-container">
      <div className='calendar-container-date'>
        <button
          className='calendar-container-arrow'
          onClick={handlePrevMonth}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <span>{`${monthNames[currentMonthIndex]} ${currentYear}`}</span>
        <button
          className='calendar-container-arrow'
          onClick={handleNextMonth}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="calendar-header">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">
            {day[0]}
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
    </div>
  );
};

{/* <a href='/' className='link-button'>Home</a> */ }

export default Calendar;
