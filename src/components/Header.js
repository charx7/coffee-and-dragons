import React from 'react';
import {NavLink} from 'react-router-dom';
// Imports de React BS
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap'; 

const Header = () => (
    <header>
        <Navbar id="barraNavegacion" inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Admin</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">HOME</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Logout</NavItem>
                    <NavDropdown eventKey={3} title="Menu Principal" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Configuracion</MenuItem>
                        <MenuItem eventKey={3.3}>Usuarios</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Salir</MenuItem>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    </header>
);

export default Header;