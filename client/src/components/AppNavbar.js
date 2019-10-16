import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  Nav,
  NavbarToggler
} from 'reactstrap';

class AppNavbar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar color='bg-light' light expand='sm'>
        <NavbarBrand href='/'>
          <h4>U.M.I.</h4>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem active>
              <NavLink href='#home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#services'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#team'>Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#connect'>Connect</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
