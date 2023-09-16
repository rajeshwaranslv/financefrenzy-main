import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserAuth } from '../context/AuthContext';
import Topbar from './Topbar';
import Hero from './Hero';

const MainDashboard = () => {
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
    <>
    <Topbar/>
    <Route path="/account/welcome" element={Hero}/>
    </>
   
 
};

export default MainDashboard;
 