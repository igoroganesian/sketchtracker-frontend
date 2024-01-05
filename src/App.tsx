import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import LessonsList from './components/LessonsList';
import Calendar from './components/Calendar';
import HeatMapCalendar from './components/HeatMapCalendar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/heatmap"
          element={
            <div>
              <HeatMapCalendar />
              <HeatMapCalendar />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

// const activityData: ActivityData = {
//   '2024-01-01': true,
//   '2024-01-02': false,
//   '2024-01-03': true,
//   '2024-01-04': true,
//   '2024-01-05': false,
//   '2024-01-06': true,
//   '2024-01-07': false,
//   '2024-01-08': true,
//   '2024-01-09': false,
//   '2024-01-10': true,
//   '2024-01-11': true,
//   '2024-01-12': false,
//   '2024-01-13': true,
//   '2024-01-14': false,
//   '2024-01-15': true,
//   '2024-01-16': false,
//   '2024-01-17': true,
//   '2024-01-18': true,
//   '2024-01-19': false,
//   '2024-01-20': true,
//   '2024-01-21': false,
//   '2024-01-22': true,
//   '2024-01-23': false,
//   '2024-01-24': true,
//   '2024-01-25': true,
//   '2024-01-26': false,
//   '2024-01-27': true,
//   '2024-01-28': false,
//   '2024-01-29': true,
//   '2024-01-30': false,
//   '2024-01-31': true,
// };