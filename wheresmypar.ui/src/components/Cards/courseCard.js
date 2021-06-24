import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className='course-card'>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>{course.formatted_address}</p>
          {/* <p>Rating: {course.rating}</p>
          <p>Total Ratings: {course.user_ratings_total}</p> */}
        </div>
        <Link className='btn btn-dark m-2 course-details-btn' to={`/course-details/${course.id}`}>
          Course Details
        </Link>
      </div>
    </div>
  );
}
