import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthWidget from './../containers/AuthWidget';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import FA from './FA';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const navBarStyle = {
    color: 'white',
    backgroundColor: 'dodgerblue'
};

class Header extends Component {
    render() {
        return (
            <Navbar variant="dark" style={navBarStyle}>
                <Navbar.Brand href="/">
                    <h1>PoE Stash Tool</h1>
                </Navbar.Brand>
                <Nav className='mr-auto'>
                </Nav>
                <Nav>
                    <Nav.Link href='/chars'>Characters</Nav.Link>
                    <Nav.Link href='/stash'>Stash</Nav.Link>
                    <Nav.Link href='/inv'>Inventory</Nav.Link>
                    <NavDropdown title='User'>
                        <AuthWidget />
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ state }) => ({ state });
export default connect(mapStateToProps, null)(Header);
