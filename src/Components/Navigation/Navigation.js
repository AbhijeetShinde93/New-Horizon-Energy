import React from "react";
import "./Navigation.css";
import { Navbar, Button, Nav } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <div>
      <div>
        <Navbar expand="lg" fixed="top" className="navigation">
          <Navbar.Brand href="/" id="brand-logo">
            New Horizon Energy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/ourvision">Vision</Nav.Link>
              <Nav.Link href="/ourservices">Services</Nav.Link>
            </Nav>
            <Nav.Link
              type="button"
              href="/contactus"
              className="btn btn-Enquiry">
              Contact us
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
