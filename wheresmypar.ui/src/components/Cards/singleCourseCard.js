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
            <Link className='btn btn-dark m-2' to={`/new-game/${course.id}`}>
              Start A New Game
            </Link>
            <button
              className='btn btn-dark m-2'
              id={course.id}
              onClick={() => this.addToFavorites()}
            >
              Add To Favorites
            </button>
            <Link className='btn btn-dark m-2' to={`/view-reviews/${course.id}`}>
              View Reviews
            </Link>
          </div>
        </div>
      </div>
  );
}
