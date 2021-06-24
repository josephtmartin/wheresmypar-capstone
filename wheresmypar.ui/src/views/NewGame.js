import React from 'react';
import userCourseScoresData from '../helpers/data/userCourseScoresData';

export default class NewGame extends React.Component {
  state = {
    counterValue: 0,
    courseId: parseInt(this.props.match.params.id, 10),
    userId: this.props.dbUser.id,
  }

  decrease = () => {
    this.setState({
      counterValue: this.state.counterValue - 1
    });
  }

  reset = () => {
    this.setState({
      counterValue: 0
    });
  }

  increase = () => {
    this.setState({
      counterValue: this.state.counterValue + 1
    });
  }

  addScoreToDb = () => {
    const { counterValue, courseId, userId } = this.state;
    userCourseScoresData.addScores(userId, courseId, counterValue);
  }

  render() {
    const { counterValue } = this.state;
    const { user } = this.props;
    return (
      <div className='outer-container'>
        <div className='sub-container'>
          <div className='counter--card'>
            <h2 className="counter--header">{user.displayName}</h2>
            <h1 className='counter--value'>{counterValue}</h1>
            <div className='counter--buttons'>
              <button className='btn btn-dark m-2' onClick={() => this.decrease()}>-1</button>
              <button className='btn btn-light m-2' onClick={() => this.reset()}>Reset</button>
              <button className='btn btn-dark m-2' onClick={() => this.increase()}>+1</button>
            </div>
            <button className='btn btn-light m-2' onClick={() => this.addScoreToDb()}>Submit Score</button>
          </div>
        </div>
      </div>
    );
  }
}
