import React from 'react';
import ReviewForm from '../components/Forms/reviewForm';

export default class Review extends React.Component {
  render() {
    return (
      <>
        <ReviewForm dbUser={this.props.dbUser} courseId={parseInt(this.props.match.params.id, 10)}/>
      </>
    );
  }
}
