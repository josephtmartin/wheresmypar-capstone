import React from 'react';

import FavoritesCourseCard from '../components/Cards/favoritesCourseCard';
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
      this.setState({
        courses: response,
      });
    });
  }

  render() {
    const { courses } = this.state;
    const { user, dbUser } = this.props;

    const renderAllCourseCards = () => courses.map((course) => (<FavoritesCourseCard key={course.id} course={course} dbUser={dbUser}/>));
    return (
      <>
        <h2>{user.displayName}&apos;s Favorites</h2>
        {renderAllCourseCards()}
      </>
    );
  }
}
