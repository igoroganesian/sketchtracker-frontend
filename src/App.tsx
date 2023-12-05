import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

type Lesson = {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/lessons');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const lessons: Lesson[] = await response.json();
        setLessons(lessons);
      } catch (e) {
        console.log(e);
      }
    };
    fetchLessons();
  }, []);


  return (
    <div className='lessons'>
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          title={lesson.title}
          content={lesson.content}
        ></div>
      ))}
    </div>
  );
}

export default App;
