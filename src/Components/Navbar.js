import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// export default class Navbar extends Component {
//   render() {
//     function refreshPage() {
//       window.location.reload(true);
  
//     }
//    return (
//       <header id="header" class="fixed-top d-flex align-items-center">
//         <div class="container-fluid d-flex align-items-center">
//           <h1 class="logo me-auto">
//             <Link class="navbar-brand" to="/">
//               <img
//                 src="assets/img/logo.png"
//                 width="40"
//                 height="40"
//                 alt="Finance Frenzy"
//                 style={{ position: "relative", bottom: "0.2px" }}
//               />
//             </Link>
//             <Link to="/">financeFrenzy</Link>
//             <br />
//             <span
//               style={{
//                 fontSize: "10px",
//                 position: "relative",
//                 bottom: "24px",
//                 right: "8px",
//               }}
//             >
//               We help build your Dream!
//             </span>
//           </h1>
//           <nav
//             id="navbar"
//             class="navbar navbar-expand-lg navbar-light bg-light navbar-default navbar-inverse order-last order-lg-0"
//           >
//             <ul nav nav-tabs>
//               <li>
//                 <Link class="nav-link scrollto " to="/#hero">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link   class="nav-link scrollto " to="/About/#about" >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link  class="nav-link scrollto "  to="/Services/#services">
//                   Services
//                 </Link>
//               </li>

//               <li>
//                 <Link  class="nav-link scrollto " to="/Products/#pricing">
//                   Products
//                 </Link>
//               </li>

//               <li>
//                 <Link  class="nav-link scrollto "  to="/Careers/#careers">
//                   Careers
//                 </Link>
//               </li>

//               <li>
//                 <Link  class="nav-link scrollto "  to="/Contact/#contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             <i class="bi bi-list mobile-nav-toggle"> </i>
//           </nav>
//         </div>
//       </header>
//     );
//   }
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 

function CollapsibleExample() {
  
  return (
    <Navbar collapseOnSelect expand="lg "   bg="dark" variant="dark">
      <Container className="m-3">
        <Navbar.Brand href="#home">
        <img
              src=".\assets\img\logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Link to="/"><span><h1>financeFrenzy</h1></span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"   className="ms-auto float-sm-left float-md-left float-lg-left float-xl-left"/>
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto">
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