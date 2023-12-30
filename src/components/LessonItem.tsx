import React, { useState } from 'react';
import "./LessonItem.css";

type LessonProps = {
  lesson: {
    id: number;
    title: string;
    content: string;
  };
};

const LessonItem: React.FC<LessonProps> = ({ lesson }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const formattedContent = lesson.content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="lessonsList-lesson" onClick={toggleCollapse}>
      <h2>{lesson.title}</h2>
      <div className={isCollapsed ? "lessonsList-content" : "lessonsList-content-expanded"}>
        <p>{formattedContent}</p>
      </div>
    </div>
  );
};

export default LessonItem;
