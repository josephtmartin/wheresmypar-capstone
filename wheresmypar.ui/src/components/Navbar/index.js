import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';

// pass user as parameter when user auth is setup
export default class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
    <div>
      <Navbar color="dark" expand="lg">
        <NavbarBrand className='gradient-text'>
          <Link to='/' className='nav-link' href='#'>Wheres My Par?</Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className='custom-toggler'/>
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="link-container mr-auto" navbar>
            <NavItem>
                <Link to='/find-courses' className="nav-link m-2" href="#">Find Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/favorite-courses' className="nav-link m-2" href="#">Favorite Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/games-played' className="nav-link m-2" href="#">Games Played</Link>
            </NavItem>
          </Nav>
          <p className='mr-2 mt-3 text-light'>Search:</p>
            <SearchInput />
        </Collapse>
      </Navbar>
    </div>
    );
  }
}
