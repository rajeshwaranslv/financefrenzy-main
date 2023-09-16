import React, { useEffect, useState } from 'react';
import firebase from './firebase';

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp({
      // Add your Firebase configuration here
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DATABASE_URL",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    });

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
