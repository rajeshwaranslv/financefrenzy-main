import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import firebase from "../firebase";

const NAVIE = () => {
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        // Logout successful
        console.log('Logout successful');
      })
      .catch((error) => {
        // Handle logout errors
        console.error('Logout error:', error);
      });
  };

  return (
 
    
  );
};

export default NAVIE;
