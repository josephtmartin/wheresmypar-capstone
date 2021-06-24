import React from 'react';
import moment from 'moment';
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
        <h3 className='date-played'>Date: {moment(score.date_played).format('MMM Do YYYY')}</h3>
        <h3 className='score'>Score: {score.score}</h3>
        <hr/>
      </div>
    ));
    return (
      <div className='outer-container'>
        <div className='sub-container'>
          <h2>Your Games At {courseName}</h2>
          <div className="overflow-auto">{renderScores()}</div>
        </div>
      </div>
    );
  }
}
