import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import LessonsList from './components/LessonsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsList />}/>
        <Route path="/calendar" />
      </Routes>
    </Router>
  );
};

export default App;
