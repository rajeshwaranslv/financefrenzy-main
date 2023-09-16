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

class Home extends React.Component {
  handleLogout = () => {
    // Perform logout logic
    console.log('Logout');
  };

  render() {
    return (



      <div>
        
        <h2>Welcome to the Home page</h2>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;



 
