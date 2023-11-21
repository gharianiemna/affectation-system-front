import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './navbar.css';

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const authToken = localStorage.getItem('authToken');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirection to login page
    };

    // Check if the current route is the login page
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return null; // Don't render the navbar on the login page
    }

    return (
        <>
        <Navbar className="navclass" data-bs-theme="dark">
            <Container>

            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" style={{ color: 'aliceblue', fontSize: '20px' , marginRight:"50px"}}>
                Tasks
                </Nav.Link>
                <Nav.Link as={Link} to="/userList" style={{ color: 'aliceblue', fontSize: '20px' }}>
                Users
                </Nav.Link>
            </Nav>
            <Nav >
            <Nav.Link variant="link" onClick={handleLogout} style={{ color: 'aliceblue', fontSize: '20px' }}>
                    Logout
                    </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;
