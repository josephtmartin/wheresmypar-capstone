import React from 'react';
import userCourseScoresData from '../helpers/data/userCourseScoresData';
import CourseScoresCard from '../components/Cards/courseScoresCard';

export default class GamesPlayed extends React.Component {
  state = {
    courses: [],
  }

  componentDidMount() {
    const { dbUser } = this.props;
    this.getUserScores(dbUser.id);
  }

  getUserScores = (userId) => {
    userCourseScoresData.getAllScoresForAUser(userId).then((response) => {
      this.setState({
        courses: response,
      });
    });
  }

  render() {
    const { courses } = this.state;
    const { user } = this.props;

    const renderAllCourseCards = () => courses.map((course) => (<CourseScoresCard key={course.course_id} course={course} />));
    return (
      <>
        <h2>Games Played By {user.displayName}</h2>
        {renderAllCourseCards()}
      </>
    );
  }
}
