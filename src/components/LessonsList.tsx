import { useState, useEffect } from 'react';
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
      title: "Sample Lesson",
      content: "This is a sample lesson content."
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
          <div
            key={lesson.id}
            className='lessonsList-lesson'>
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            {/* admin features; edit/delete buttons here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsList;
