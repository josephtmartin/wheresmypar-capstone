import React from 'react';
import firebase from 'firebase';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

import brandLogo from '../../images/disc-golf-logo.png';
import Auth from '../Auth';

// pass user as parameter when user auth is setup
export default class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <Navbar className='navbar' expand='lg'>
          <NavbarBrand className='gradient-text m-0 p-0'>
            <Link style={{ padding: '8px' }} to='/' className='nav-link' href='#'>
              <img style={{ width: '50px' }} src={brandLogo} />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='custom-toggler' />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className='link-container mr-auto' navbar>
              <NavItem>
                <Link
                  to='/find-courses'
                  className='nav-link m-2'
                  href='#'
                >
                  Find Courses By City
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to='/find-courses-map'
                  className='nav-link m-2'
                  href='#'
                >
                  Find Courses By Map
                </Link>
              </NavItem>
              <NavItem>
                {user && (
                  <Link to='/favorite-courses' className='nav-link m-2' href='#'>
                  Favorite Courses
                  </Link>
                )}
              </NavItem>
              <NavItem>
                { user && (
                  <Link to='/games-played' className='nav-link m-2' href='#'>
                  Games Played
                  </Link>
                )}
              </NavItem>
            </Nav>
            <NavbarText>
              <div className='form-inline my-2 my-lg-0'>
                {user ? (
                  <Link to='null' className='nav-link m-2' href='#' onClick={this.logoutClickEvent}>
                    Logout
                  </Link>
                ) : (
                  <Auth user={user} />
                )}
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
