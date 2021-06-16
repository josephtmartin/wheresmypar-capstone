import React from 'react';
import Ratings from 'react-ratings-declarative';

export default function ReviewCard({ review }) {
  return (
    <div className='course-card'>
      <div className='card m-2'>
        <h5 className='card-title'>{review.review}</h5>
        <div className='card-body'>
        <Ratings
            rating={review.user_rating}
            widgetRatedColors="gold"
            widgetHoverColors="gold"
          >
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
          </Ratings>
        </div>
      </div>
    </div>
  );
}
