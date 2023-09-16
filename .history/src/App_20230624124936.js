import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import firebase from './firebase'

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';
class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  this.hostate = {
    user: null
  };
  

  componentDidMount() {
    // Check if user is authenticated
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        this.setState({ user });
      } else {
        // User is signed out
        this.setState({ user: null });
      }
    });
  }

  componentWillUnmount() {
    // Cleanup subscription
    this.unsubscribe();
  }

  handleLogout = () => {
    firebase.auth().signOut();
  };
  

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div>
          <h1>My App</h1>
          <Switch>
            <Route exact path="/">
              {user ? <Home onLogout={this.handleLogout} /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route path="/register">
              {!user ? <Register /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
