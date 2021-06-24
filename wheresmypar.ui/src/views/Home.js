import React from 'react';
// import TypingEffect from '../components/TypingEffect';

export default class Home extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className='outer-container'>
        <div className='home-container'>
          {/* <TypingEffect /> */}
          <h1 className='home-heading'>Welcome to Where&apos;s My Par!</h1>
          {user ? (
            <h1 className='home-heading'>Thanks for logging in!</h1>
          ) : (
            <h1 className='home-heading'>Log in to unlock more features!</h1>
          )}
        </div>
      </div>
    );
  }
}
