import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    function refreshPage() {
      window.location.reload(true);
  
    }
   return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="logo me-auto">
            <Link class="navbar-brand" to="/">
              <img
                src="assets/img/logo.png"
                width="40"
                height="40"
                alt="Finance Frenzy"
                style={{ position: "relative", bottom: "0.2px" }}
              />
            </Link>
            <Link to="/">financeFrenzy</Link>
            <br />
            <span
              style={{
                fontSize: "10px",
                position: "relative",
                bottom: "24px",
                right: "8px",
              }}
            >
              We help build your Dream!
            </span>
          </h1>
          <nav
            id="navbar"
            class="navbar navbar-expand-lg navbar-light bg-light navbar-default navbar-inverse order-last order-lg-0"
          >
            <ul nav nav-tabs>
              <li>
                <Link class="nav-link scrollto " to="/#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link   class="nav-link scrollto " to="/About/#about" >
                  About
                </Link>
              </li>
              <li>
                <Link  class="nav-link scrollto "  to="/Services/#services">
                  Services
                </Link>
              </li>

              <li>
                <Link  class="nav-link scrollto " to="/Products/#pricing">
                  Products
                </Link>
              </li>

              <li>
                <Link  class="nav-link scrollto "  to="/Careers/#careers">
                  Careers
                </Link>
              </li>

              <li>
                <Link  class="nav-link scrollto "  to="/Contact/#contact">
                  Contact
                </Link>
              </li>
            </ul>

            <i class="bi bi-list mobile-nav-toggle"> </i>
          </nav>
        </div>
      </header>
    );
  }
}
