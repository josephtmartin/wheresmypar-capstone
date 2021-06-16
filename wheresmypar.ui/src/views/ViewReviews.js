import React from 'react';
import userCoursesData from '../helpers/data/userCoursesData';
import ReviewCard from '../components/Cards/reviewCard';

export default class ViewReviews extends React.Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.getReviews(courseId);
  }

  getReviews = (courseId) => {
    userCoursesData.getReviewsForACourse(courseId).then((response) => {
      this.setState({
        reviews: response,
      });
    });
  }

  render() {
    const { reviews } = this.state;

    const renderAllCourseCards = () => reviews.map((review) => (<ReviewCard key={review.id} review={review} />));

    return (
      <div className='outer-container'>
        <div className='sub-container'>
          <h2>Reviews:</h2>
          {reviews.length ? renderAllCourseCards() : <h2>There are currently no reviews for this course</h2>}
        </div>
      </div>
    );
  }
}
