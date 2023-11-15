import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">TASK AFFECTATION</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" style={{ color: 'aliceblue', fontSize: '20px' }}>Tasks</Nav.Link>
                <Nav.Link as={Link} to="/userList" style={{ color: 'aliceblue', fontSize: '20px' }}>Users</Nav.Link>
            </Nav>
            <Nav className="d-flex">
                <Nav.Link as={Link} to="/login" className="d-flex" style={{ color: 'aliceblue', fontSize: '20px' }}>login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
    }

export default NavBar;
