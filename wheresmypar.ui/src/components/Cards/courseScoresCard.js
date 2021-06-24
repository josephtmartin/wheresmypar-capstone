import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function courseScoresCard({ course }) {
  return (
    <div className='course-card'>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>Date: {moment(course.date_played).format('MMM Do YYYY')}</p>
          <p>Score: {course.score}</p>
        </div>
        <Link className='btn btn-dark m-2' to={`/course-details/${course.course_id}`}>
          Course Details
        </Link>
      </div>
    </div>
  );
}
