import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import fbConnection from '../helpers/data/fbConnection';
import './App.scss';

import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';

// fbConnection();
export default class App extends React.Component {
  state = {
    user: null,
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes/>
        </Router>
      </div>
    );
  }
}
