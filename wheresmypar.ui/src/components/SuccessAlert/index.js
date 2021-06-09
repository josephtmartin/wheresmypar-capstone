import React, { Component } from 'react';

export default class SuccessAlert extends Component {
  render() {
    return (
      <div>
        <div className='success'>
          <div className='alert alert-success' role='alert'>
            <h4 className='alert-heading'>Thank You!</h4>
            <p>Your review has been submitted and is appreciated!</p>
          </div>
        </div>
      </div>
    );
  }
}
