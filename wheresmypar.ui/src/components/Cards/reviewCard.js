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
            widgetRatedColors="grey"
            widgetHoverColors="grey"
          >
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
          </Ratings>
        </div>
      </div>
    </div>
  );
}
