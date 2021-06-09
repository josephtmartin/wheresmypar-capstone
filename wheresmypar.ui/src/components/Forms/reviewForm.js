import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';
import userCoursesData from '../../helpers/data/userCoursesData';

export default class ReviewForm extends Component {
  state = {
    review: '',
  };

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { courseId } = this.props;
    const { review, rating } = this.state;
    e.preventDefault();
    userCoursesData.AddAReview(courseId, rating, review);
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
            widgetRatedColors="gold"
            widgetHoverColors="gold"
            changeRating={this.changeRating}
          >
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
            <Ratings.Widget widgetRatedColor="gold"/>
          </Ratings>
          <button className='btn btn-dark m-2'>Submit</button>
      </form>
    );
  }
}
