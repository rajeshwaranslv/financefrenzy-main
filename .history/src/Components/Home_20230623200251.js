import React from 'react';
// Packages used
 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Component Splitted
import "../App.css";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import End from "../Components/End";
import Careers from "../Components/Careers";
import Contact from "../Components/Contact";
import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import Register from './Register';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp({
      // Add your Firebase configuration here
    });

    // Add a listener to handle authentication state changes
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        this.setState({ user });
      } else {
        // User is signed out
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>My App</h1>
        {user ? (
          <Home />
        ) : (
          <div>
            <Login />
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default App;


const Home = () => {
    console.log('Home Wait');

  return (
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
    <Route exact path="/" component={Hero} />

    <Switch>
      <main id="main">
        <Route exact path="/About/" component={About} />
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
  );
};

export default Home;
