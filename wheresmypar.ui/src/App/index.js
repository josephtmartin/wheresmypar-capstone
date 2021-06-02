import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import fbConnection from '../helpers/data/fbConnection';
import './App.scss';

import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';
import userData from '../helpers/data/userData';

fbConnection();

export default class App extends React.Component {
  state = {
    user: null,
    dbUser: {},
  };

  // When the user logs in do this if not set user to false
  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // grabs the auth token use sessionStorage.getItem("token") to grab it
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        this.setState({ user });
        userData.getUserByFBUid(user.uid).then((currentUser) => {
          this.setState({ dbUser: currentUser });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  // when app unloads kill the listener
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, dbUser } = this.state;
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar user={user}/>
          <Routes user={user} dbUser = {dbUser}/>
        </BrowserRouter>
      </div>
    );
  }
}
