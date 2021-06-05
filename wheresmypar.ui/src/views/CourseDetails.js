import React from 'react';
import { Link } from 'react-router-dom';
import courseData from '../helpers/data/courseData';
import userCoursesData from '../helpers/data/userCoursesData';

export default class CourseDetails extends React.Component {
  state = {
    course: {},
    isFavorite: false,
  };

  componentDidMount() {
    const { dbUser } = this.props;
    const courseId = this.props.match.params.id;
    this.getASingleCourse(courseId);
    this.checkIfFavorite(dbUser.id);
  }

  getASingleCourse = (courseId) => {
    courseData.getSingleCourse(courseId).then((response) => {
      this.setState({
        course: response,
      });
    });
  };

  addToFavorites = () => {
    const { dbUser } = this.props;
    const courseId = parseInt(this.props.match.params.id, 10);
    userCoursesData.createUserCoursesFavorites(dbUser.id, courseId);
  };

  removeFromFavorites = () => {
    const courseId = parseInt(this.props.match.params.id, 10);
    userCoursesData.deleteFromFavorites(courseId);
    this.setState({
      isFavorite: false,
    });
  }

  checkIfFavorite = (userId) => {
    const courseId = parseInt(this.props.match.params.id, 10);
    userCoursesData.getUserCoursesFavorites(userId).then((response) => {
      response.forEach((course) => {
        if (course.course_id === courseId && course.is_favorite === true) {
          this.setState({ isFavorite: true });
        }
      });
    });
  };

  render() {
    const { course, isFavorite } = this.state;
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
              {isFavorite ? (
                <button
                  className='btn btn-danger m-2'
                  id={course.id}
                  onClick={() => this.removeFromFavorites()}
                >
                  Remove From Favorites
                </button>
              ) : (
                <button
                  className='btn btn-success m-2'
                  id={course.id}
                  onClick={() => this.addToFavorites()}
                >
                  Add To Favorites
                </button>
              )}
              <Link className='btn btn-primary m-2' to={`/review/${course.id}`}>
                Leave A Review
              </Link>
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
