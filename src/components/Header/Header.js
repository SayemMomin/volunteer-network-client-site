import React, { useContext } from 'react';
import logo from '../../Images/logo.png';
import { Navbar, Button, Nav, Image } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [userLoggedIn] =useContext(UserContext)
    return (
        <div className="container font-weight-bold">
            <Navbar bg="light" expand="lg">
           
                <Navbar.Brand href="#home"> <Image src={logo} className="img-fluid w-25" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/eventSelected">My Event</Nav.Link>
                    <Nav.Link href="/regList">Register List</Nav.Link>
                    {
                        userLoggedIn.isSignIn? <b style={{color:'#3F90FC'}}>{userLoggedIn.name} </b> :
                        <Button href="/login">Login</Button>
                    }
                   
                    <Button className="ml-3" href="/admin">Admin</Button>
                    </Nav>              
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;