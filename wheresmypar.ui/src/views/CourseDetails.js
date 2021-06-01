import React from 'react';
import { Link } from 'react-router-dom';
import courseData from '../helpers/data/courseData';

export default class CourseDetails extends React.Component {
  state = {
    course: {},
  };

  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.getASingleCourse(courseId);
  }

  getASingleCourse = (courseId) => {
    courseData.getSingleCourse(courseId).then((response) => {
      this.setState({
        course: response,
      });
    });
  };

  addToFavorites = (e, courseId) => {
    console.warn(e.target.id, courseId, 'addToFavorites');
  }

  render() {
    const { course } = this.state;
    return (
      <>
        <h2>Course Details Page</h2>
        <div className='course-card' style={{ width: '500px' }}>
          <div className='card m-2'>
            <h5 className='card-title'>{course.name}</h5>
            <div className='card-body'>
              <p className='card-text'>{course.formatted_address}</p>
              <p>Rating: {course.rating}</p>
              <p>Total Ratings: {course.user_ratings_total}</p>
              <Link className='btn btn-primary m-2' to={`/new-game/${course.id}`}>
                Start A New Game
              </Link>
              <button
                className='btn btn-success m-2'
                id={course.id}
                onClick={(e) => this.addToFavorites(e, course.id)}>
                Add To Favorites
              </button>
              <Link className='btn btn-primary m-2' to={`/view-reviews/${course.id}`}>
                View Reviews
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
