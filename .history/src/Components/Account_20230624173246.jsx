import React from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (

    // <nav class="bg-gray-800">
    //   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div class="relative flex h-16 items-center justify-between">
    //       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

    //         <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
    //           <span class="sr-only">Open main menu</span>

    //           <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //           </svg>

    //           <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //         <div class="flex flex-shrink-0 items-center">
    //           <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
    //           <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
    //         </div>
    //         <div class="hidden sm:ml-6 sm:block">
    //           <div class="flex space-x-4">
    //             <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
    //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
    //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
    //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
    //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleLogout}>Logout: {user && user.email}</a>
   
    //           </div>
    //         </div>
    //       </div>
    //       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //           <span class="sr-only"></span>
    //           <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    //           </svg>
    //         </button>

    //       </div>
    //     </div>
    //   </div>

    //   <div class="sm:hidden" id="mobile-menu">
    //     <div class="space-y-1 px-2 pb-3 pt-2">
    //       <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
    //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
    //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
    //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    //     </div>

    //   </div>
      


    // </nav>

    <Navbar collapseOnSelect expand="lg " bg="dark" variant="dark">
      <Container className="m-3">
        <Nav.Link href="#hero">
          {" "}
          <Navbar.Brand>
            <Link to="/">
              <img
                src=".\assets\img\logo.png"
                width="50"
                height="50"
                style={{
                  position: "relative",
                  right: "2rem",
                  top: "0.2rem",
                }}
                className="d-inline-block align-top ml-8"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto float-sm-left  float-md-left float-lg-left float-xl-left"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" className="logo">
              <Link className="nav-link" to="/">
                <h1 className="logo">
                  <Link className="nav-link" to="/">
                    <h6>
                      Finance Frenzy <br />{" "}
                      <span
                        style={{
                          fontSize: "6.5px",
                          color: "white",
                          fontWeight: "bolder",
                        }}
                      >
                        We help build your Dream!
                      </span>{" "}
                    </h6>{" "}
                  </Link>
                </h1>
              </Link>
            </Nav.Link>

            <Nav.Link href="#about">
              <Link className="nav-link" to="/About">
                <h6>About</h6>
              </Link>
            </Nav.Link>
            <Nav.Link href="#services">
              <Link className="nav-link" to="/Services">
                <h6>Services</h6>
              </Link>
            </Nav.Link>
            <Nav.Link href="#products">
              <Link className="nav-link" to="/Products">
                <h6>Products</h6>
              </Link>
            </Nav.Link>
            <Nav.Link href="#careers">
              <Link className="nav-link" to="/Careers">
                <h6>Careers</h6>
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link className="nav-link" to="/Contact">
                <h6>Contact</h6>
              </Link>
            </Nav.Link>
            <Nav.Link href="#hero">
              <Link className="nav-link" to="/login">
                <button style={{margin:"0",padding:"10px 50px",backgroundColor:"red", color:"white",borderRadius:"1rem",border:"none"}} onClick={handleLogout}>Logout</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  );
};

export default Account;
