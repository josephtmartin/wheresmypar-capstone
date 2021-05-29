import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import fbConnection from '../helpers/data/fbConnection';
import './App.scss';

import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';

fbConnection();

export default class App extends React.Component {
  state = {
    user: null,
  };

  // When the user logs in do this if not set user to false
  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // grabs the auth token use sessionStorage.getItem("token") to grab it
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        this.setState({ user });
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
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}
