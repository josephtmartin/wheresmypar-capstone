import React from 'react';

import CourseCard from '../components/Cards/courseCard';
import userCoursesData from '../helpers/data/userCoursesData';

export default class FavoriteCourses extends React.Component {
  state = {
    courses: [],
  }

  componentDidMount() {
    const { dbUser } = this.props;
    this.getUserFavoriteCourses(dbUser.id);
  }

  getUserFavoriteCourses = (userId) => {
    userCoursesData.getUserCoursesFavorites(userId).then((response) => {
      console.warn(response, 'favorites');
      this.setState({
        courses: response,
      });
    });
  }

  render() {
    const { courses } = this.state;

    const renderAllCourseCards = () => courses.map((course) => (<CourseCard key={course.id} course={course} />));
    return (
      <>
        <h2>Favorite Courses Page</h2>
        {renderAllCourseCards()}
      </>
    );
  }
}
