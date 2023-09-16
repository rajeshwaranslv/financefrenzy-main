import React from "react";
// Packages used

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Component Splitted
import "../App.css";
import NAVIE from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";
import End from "./End";
import Careers from "./Careers";
import Contact from "./Contact";
import Services from "./Services";
 

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'rajeshwaran1807',
      password: '',
      error: null,
    };
  }
  render() {
    return (
      <div>
 
        <div className="App">
          <Helmet>
            <script src="assets/vendor/purecounter/purecounter.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/js/main.js" type="text/javascript" />
          </Helmet>
          <NAVIE />
          <Route exact path="/" component={Hero} />

          <Switch>
            <main id="main">
              <Route exact path="/About" component={About} />
              
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Careers" component={Careers} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Products" component={Products} />
            </main>
          </Switch>
          <footer id="footer">
            <div class="footer-top">
              <Footer />
            </div>
            <End />
          </footer>
          <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-arrow-up-short"></i>
          </a>
        </div>

  

      </div>
    );
  }
}


