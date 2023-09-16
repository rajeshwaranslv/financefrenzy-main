import React from 'react';
import firebase from './firebase';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';

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
      apiKey: "AIzaSyDlHS_UZ5zGZATHtS1OonoCrX1m9kFnZ6Y",
      authDomain: "selvfi.firebaseapp.com",
      databaseURL: "https://selvfi-default-rtdb.firebaseio.com",
      projectId: "selvfi",
      storageBucket: "selvfi.appspot.com",
      messagingSenderId: "80947274395",
      appId: "1:80947274395:web:ffb698fb40da8908abdc3e",
      measurementId: "G-SFRCRRDZM1"
    });

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

  handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        // Successfully signed out
        this.setState({ user: null });
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <Helmet>
            {/* Add your helmet configurations */}
          </Helmet>
          <nav>
            {/* Add your navigation elements */}
            <Link to="/">Home</Link>
            {user ? (
              <button onClick={this.handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}
e