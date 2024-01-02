import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/Homepage';
import LessonsList from './components/LessonsList';
import Calendar from './components/Calendar';
import HeatMapCalendar from './components/HeatMapCalendar';

type ActivityData = {
  [date: string]: boolean;
};

const App = () => {
  const activityData: ActivityData = {
    '2023-01-01': true,
    '2023-01-02': false,
    '2023-01-03': true,
    '2023-01-04': true,
    '2023-01-05': false,
    '2023-01-06': true,
    '2023-01-07': false,
    '2023-01-08': true,
    '2023-01-09': false,
    '2023-01-10': true,
    '2023-01-11': true,
    '2023-01-12': false,
    '2023-01-13': true,
    '2023-01-14': false,
    '2023-01-15': true,
    '2023-01-16': false,
    '2023-01-17': true,
    '2023-01-18': true,
    '2023-01-19': false,
    '2023-01-20': true,
    '2023-01-21': false,
    '2023-01-22': true,
    '2023-01-23': false,
    '2023-01-24': true,
    '2023-01-25': true,
    '2023-01-26': false,
    '2023-01-27': true,
    '2023-01-28': false,
    '2023-01-29': true,
    '2023-01-30': false,
    '2023-01-31': true,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/heatmap" element={<HeatMapCalendar activityData={activityData} />} />
      </Routes>
    </Router>
  );
};

export default App;
