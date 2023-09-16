import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  else {
    // Assuming the about page has a route called '/about'
    return <Navigate to='/about' />;
  }
  
  return children;
};

export default ProtectedRoute;
