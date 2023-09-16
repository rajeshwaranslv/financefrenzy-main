import React, { useEffect, useState } from 'react';
import firebase from './firebase';

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';

const App = () => {
  const [user, setUser] = useState(true);

  useEffect(() => {
    // Initialize Firebase


    // Add a listener to handle authentication state changes
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <Home user={user} />
      ) : (
        <div>
          <Login />
          <Register />
        </div>
      )}
    </div>
  );
};

export default App;
