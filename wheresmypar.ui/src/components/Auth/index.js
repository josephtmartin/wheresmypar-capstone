import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../helpers/config.json';

export default class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((cred) => {
      // const user = cred.additionalUserInfo.profile;
      if (cred.additionalUserInfo.isNewUser) {
        const userInfo = {
          fb_uid: cred.user.uid
        };
        axios.post(`${baseUrl}/users`, userInfo);
      }
    });
  };

  render() {
    const { user } = this.props;
    return (
      <>
        {!user && (
          <Link to='null' className="nav-link m-2" href="#" onClick={this.loginClickEvent}>Login</Link>
        )}
      </>
    );
  }
}
