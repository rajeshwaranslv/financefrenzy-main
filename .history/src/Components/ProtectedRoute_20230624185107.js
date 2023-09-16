import React from 'react';
import { Navigate } from 'react-router-dom';
import {REd}
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  
  
  return children;
};

export default ProtectedRoute;
