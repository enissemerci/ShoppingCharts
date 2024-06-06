import React from "react";
import { Navbar as NavbarBS, Container,Nav,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
export const Navbar = () => {
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} >
                Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink} >
                Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink} >
                About
            </Nav.Link>
        </Nav>
        <Button style={{width:"4rem",height:"4rem",position:"relative"}} variant="outline-primary" className="rounded-circle">
            <FaShoppingCart/>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"white",height:"1.5rem",width:"1.5rem",position:"absolute",bottom:0,right:0}}>3</div>
        </Button>
      </Container> 
    </NavbarBS>
  );
};
