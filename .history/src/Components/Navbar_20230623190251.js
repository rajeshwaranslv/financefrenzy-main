import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
 

function CollapsibleExample() {
  
  return (
    <Navbar collapseOnSelect expand="lg "   bg="dark" variant="dark">
      <Container className="m-3">
    
     <Nav.Link href="#hero">    <Navbar.Brand>
         <Link to="/"><img
              src=".\assets\img\logo.png"
              width="50"
              height="50"
              style={{position:'relative',right:'2rem',top:'0.2rem'}}
              className="d-inline-block align-top ml-8"
              alt="React Bootstrap logo"
            /></Link></Navbar.Brand></Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"   className="ms-auto float-sm-left  float-md-left float-lg-left float-xl-left"/>
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#hero"className="logo"><Link className="nav-link" to="/"><h1 className="logo"><Link className="nav-link" to="/"><h6>Finance Frenzy <br/>   <span
            style={{
              fontSize: "6.5px",
             
              color:"white",
              fontWeight:"bolder"
            }}
          >
            We help build your Dream!
          </span> </h6> </Link></h1></Link></Nav.Link>
       
            <Nav.Link  href="#about"><Link className="nav-link" to="/About"><h6>About</h6></Link></Nav.Link>
            <Nav.Link href="#services"><Link className="nav-link" to="/Services"><h6>Services</h6></Link></Nav.Link>
            <Nav.Link href="#products"><Link className="nav-link" to="/Products"><h6>Products</h6></Link></Nav.Link>
            <Nav.Link href="#careers"><Link className="nav-link" to="/Careers"><h6>Careers</h6></Link></Nav.Link>
            <Nav.Link href="#contact"><Link className="nav-link" to="/Contact"><h6>Contact</h6></Link></Nav.Link>
          </Nav>
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;