import React from 'react';
import userCourseScoresData from '../helpers/data/userCourseScoresData';
import courseData from '../helpers/data/courseData';

export default class ScoresSingleCourse extends React.Component {
  state = {
    scores: [],
    courseId: parseInt(this.props.match.params.id, 10),
    courseName: '',
  };

  componentDidMount() {
    const { dbUser } = this.props;
    const { courseId } = this.state;
    this.getCourseName(courseId);
    this.getUserSingleCourseScores(dbUser.id, courseId);
  }

  getUserSingleCourseScores = (userId, courseId) => {
    userCourseScoresData.getAllScoresForACourse(userId, courseId).then((response) => {
      this.setState({
        scores: response,
      });
    });
  };

  getCourseName = (courseId) => {
    courseData.getSingleCourse(courseId).then((response) => {
      this.setState({
        courseName: response.name,
      });
    });
  }

  render() {
    const { scores, courseName } = this.state;

    const renderScores = () => scores.map((score) => (
      <div key={score.id} className='score-container'>
        <h2 className='date-played'>Date: {score.date_played}</h2>
        <h4 className='score'>Score: {score.score}</h4>
      </div>
    ));
    return (
      <div>
        <h2>Your Games At {courseName}</h2>
        <div className="overflow-auto">{renderScores()}</div>
      </div>
    );
  }
}
