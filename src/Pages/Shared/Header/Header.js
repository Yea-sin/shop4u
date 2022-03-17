import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
              <NavDropdown active title={user?.displayName || user?.email || 'User'} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Manage Product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My Orders</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user?.email ? (
              <div>
                {" "}
                <Button onClick={logOut} variant="outline-info">
                  Logout
                </Button>{" "}
              </div>
            ) : (
              <Link to="/login">
                <Button variant="outline-info">Login</Button>{" "}
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
