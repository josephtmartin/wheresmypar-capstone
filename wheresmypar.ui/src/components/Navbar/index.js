import React from 'react';
import firebase from 'firebase';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import brandLogo from '../../images/disc-golf-logo.png';
import Auth from '../Auth';
// import SearchInput from '../SearchInput';

// pass user as parameter when user auth is setup
export default class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { user } = this.props;
    return (
    <div>
      <Navbar className='navbar' expand="lg">
        <NavbarBrand className='gradient-text m-0 p-0'>
          <Link style={{ padding: '8px' }} to='/' className='nav-link' href='#'><img style={{ width: '50px' }} src={brandLogo}/></Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className='custom-toggler'/>
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="link-container mr-auto" navbar>
            <NavItem>
              <Link to='/find-courses' className="nav-link m-2" activeClassName='selected' href="#">Find Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/favorite-courses' className="nav-link m-2" href="#">Favorite Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/games-played' className="nav-link m-2" href="#">Games Played</Link>
            </NavItem>
            <NavItem>
              <Auth user={user}/>
            </NavItem>
          </Nav>
          <p className='mr-2 mt-3 text-light'>Search:</p>
            {/* <SearchInput /> */}
            <NavbarText>
            <div className="form-inline my-2 my-lg-0">
                {user && (
                  <button className="nav-link btn btn-outline-primary" onClick={this.logoutClickEvent}>Logout</button>
                )}
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}
