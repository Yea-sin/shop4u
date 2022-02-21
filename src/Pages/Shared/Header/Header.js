import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <Navbar className="header-bg" variant="light" expand="lg" fixed="top">
        <Container>
          <Link className="text-decoration-none" to="/home">
            <Navbar.Brand>
              <h2>
                <span className="text-info">Shop</span>
                <span className="text-dark">4</span>
                <span className="text-info">u</span>
              </h2>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home" className="links" active>
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about" className="links" active>
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/blog" className="links" active>
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
            <Link to="/login">
              <Button variant="outline-info">Login</Button>{" "}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
