import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';
import userCoursesData from '../../helpers/data/userCoursesData';

class ReviewForm extends Component {
  state = {
    review: '',
  };

  componentDidMount() {
    this.loadReviews();
  }

  loadReviews = () => {
    const { dbUser } = this.props;
    userCoursesData.getUserCoursesFavorites(dbUser.id).then((response) => {
      response.forEach((item) => {
        if (item.course_id === this.props.courseId) {
          this.setState({
            rating: item.user_rating,
            review: item.review,
          });
        }
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { courseId } = this.props;
    const userId = this.props.dbUser.id;
    const { review, rating } = this.state;
    e.preventDefault();
    userCoursesData.AddAReview(userId, courseId, rating, review);
    this.props.history.push('/success');
  }

  changeRating = (newRating) => {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Leave A Review</h1>
        <input
          type='text'
          name='review'
          value={this.state.review}
          onChange={this.handleChange}
          placeholder='Leave Review Here!'
          className='form-control form-control-lg m-1'
          required
          />
          <Ratings
            rating={this.state.rating}
            widgetRatedColors="grey"
            widgetHoverColors="grey"
            changeRating={this.changeRating}
          >
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
            <Ratings.Widget widgetRatedColor="grey"/>
          </Ratings>
          <button className='btn btn-dark m-2' to={'/success'} >Submit</button>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
