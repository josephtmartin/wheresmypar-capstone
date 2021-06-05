import React from 'react';
import { Link } from 'react-router-dom';

export default function FavoritesCourseCard({ course }) {
  return (
    <div className='course-card' style={{ width: '500px' }}>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>{course.formatted_address}</p>
          <p>Rating: {course.rating}</p>
          <p>Total Ratings: {course.user_ratings_total}</p>
        </div>
        <Link className='btn btn-primary m-2' to={`/course-details/${course.course_id}`}>
          Course Details
        </Link>
      </div>
    </div>
  );
}
