import React from 'react';
import userCourseScoresData from '../helpers/data/userCourseScoresData';

export default class ScoresSingleCourse extends React.Component {
  state = {
    scores: [],
    courseId: parseInt(this.props.match.params.id, 10),
  };

  componentDidMount() {
    const { dbUser } = this.props;
    const { courseId } = this.state;
    this.getUserSingleCourseScores(dbUser.id, courseId);
  }

  getUserSingleCourseScores = (userId, courseId) => {
    userCourseScoresData.getAllScoresForACourse(userId, courseId).then((response) => {
      this.setState({
        scores: response,
      });
    });
  };

  render() {
    return (
      <>
        <h2>Scores For A Single Course Page</h2>
      </>
    );
  }
}
