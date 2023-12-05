import { useState, useEffect } from 'react';

type Lesson = {
  id: number;
  title: string;
  content: string;
};

const LessonsList = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

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
    <div>
      <h2>Lessons List</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
            {/* admin features; edit/delete buttons here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonsList;
