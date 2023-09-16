import React from 'react';
import firebase from './firebase';

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import 

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