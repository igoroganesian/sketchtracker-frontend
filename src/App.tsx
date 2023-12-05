import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LessonsList from './components/LessonsList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lessons" element={<LessonsList />}/>
        <Route path="/calendar" />
        {/* Add admin routes */}
      </Routes>
    </Router>
  );
};

export default App;
