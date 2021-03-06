import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import * as constants from '../../../Helpers/AppConstants'
import '../Theme.css'
class Navigation extends Component{
    render(){
        return(
            <Navbar className="navbar" expand="lg" variant="dark" >
                <Navbar.Brand href={constants.Homepage}>LearnReactDaily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}

                    {/* <NavDropdown title="Levels" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Basic</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Navigation