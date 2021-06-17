import React from 'react';

export default function MapCourseCard({ course }) {
  const linkToCourseDetails = () => {
    window.location.href = `http://localhost:3000/course-details/${course.id}`;
  };
  return (
    <div className='course-card'>
      <div className='card m-2'>
        <h5 className='card-title'>{course.name}</h5>
        <div className='card-body'>
          <p className='card-text'>{course.formatted_address}</p>
        </div>
        <button className='btn btn-primary m-2' onClick={linkToCourseDetails}>More About Course</button>
      </div>
    </div>
  );
}
