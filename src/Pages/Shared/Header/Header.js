import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="header-bg" variant="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <h2>
              <span className="text-info">Shop</span>
              <span className="text-dark">4</span>
              <span className="text-info">u</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="links" active href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="links" active href="#link">
                About
              </Nav.Link>
              <Nav.Link className="links" active href="#link">
                Blog
              </Nav.Link>
              <NavDropdown active title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
