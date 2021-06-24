import React from 'react';
import { Link } from 'react-router-dom';
import AppModal from '../AppModal';
import ReviewForm from '../Forms/reviewForm';

export default function FavoritesCourseCard({ course, dbUser }) {
  return (
    <div className='course-card'>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>{course.formatted_address}</p>
          {/* <p>Rating: {course.rating}</p>
          <p>Total Ratings: {course.user_ratings_total}</p> */}
        </div>
        <AppModal title={'Review Form'} buttonLabel={'Leave A Review'}>
          <ReviewForm courseId={course.course_id} dbUser={dbUser}/>
        </AppModal>
        <Link className='btn btn-dark m-2' to={`/course-details/${course.course_id}`}>
          Course Details
        </Link>
      </div>
    </div>
  );
}
