import React from 'react';
import { Link } from 'react-router-dom';

export default function courseScoresCard({ course }) {
  return (
    <div className='course-card' style={{ width: '500px' }}>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>Date: {course.date_played}</p>
          <p>Score: {course.score}</p>
        </div>
        <Link className='btn btn-primary m-2' to={`/course-details/${course.course_id}`}>
          Course Details
        </Link>
      </div>
    </div>
  );
}
