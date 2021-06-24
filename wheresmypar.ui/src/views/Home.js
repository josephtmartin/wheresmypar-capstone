import React from 'react';
// import TypingEffect from '../components/TypingEffect';

export default class Home extends React.Component {
  render() {
    return (
      <div className='outer-container'>
        <div className='home-container'>
          {/* <TypingEffect /> */}
          <h1 className='home-heading'>Welcome to Where&apos;s My Par!</h1>
          <h1 className='home-heading'>Sign in to unlock more features!</h1>
        </div>
      </div>
    );
  }
}
