import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#f0f0f0' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#333' }}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu bên trái */}
          <Nav className="me-auto">
            <Nav.Link href="#about" style={{ color: '#333' }}>About</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#333' }}>Contact</Nav.Link>
          </Nav>

          {/* Menu bên phải */}
          <Nav>
            <Nav.Link href="#favourite" style={{ color: '#333' }}>Favourite</Nav.Link>
            <Nav.Link href="#account" style={{ color: '#333' }}>Account</Nav.Link>
            <Nav.Link href="#login" style={{ color: '#333' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
