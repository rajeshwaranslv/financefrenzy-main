import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import End from "./Components/End";
import Careers from "./Components/Careers";

import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
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
          <Navbar />
          <Hero />

          <Switch>
            <main id="main">
              <About />
     
             
              <Careers />
              <Contact />
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
      </Router>
    );
  }
}

export default App;
