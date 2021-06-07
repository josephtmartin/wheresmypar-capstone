import React from 'react';
import userCourseScoresData from '../helpers/data/userCourseScoresData';

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
    return (
      <>
        <h2>Games Played Page</h2>
      </>
    );
  }
}
