import { useState, useEffect } from 'react';
import LessonItem from './LessonItem';
import './LessonsList.css';

type Lesson = {
  id: number;
  title: string;
  content: string;
};

const LessonsList = () => {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      title: "Lesson 0",
      content:
        `1. 50% rule: practice / free drawing
       2. 10-15 min warmup, 2-3 exercises`
    },
    {
      id: 2,
      title: "Lesson 1: Lines, Ellipses and Boxes",
      content:
        `Lines HW:
      2 pages of the Superimposed Lines exercise
      1 page of the Ghosted Lines exercise
      2 pages of the Ghosted Planes exercise

      Ellipses HW:
      2 pages of the Tables of Ellipses exercise
      2 pages of the Ellipses in Planes exercise
      1 page of the Funnels exercise

      Boxes HW:
      1 page of the Plotted Perspective exercise (3 frames)
      2 pages of the Rough Perspective exercise (3 frames)
      1 page of the Rotated Boxes exercise
      2 pages of the Organic Perspective exercise`
    }
  ]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/lessons');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div className='lessonsList-container'>
      <h2>Lessons List</h2>
      <div className='lessonsList-grid'>
        {lessons.map(lesson => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
      <div className='lessonsList-buttons'>
        <a href='/' className='link-button'>Home</a>
        <a href='/calendar' className='link-button'>Calendar</a>
      </div>
    </div>
  );
};

export default LessonsList;
