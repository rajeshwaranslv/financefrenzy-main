// Packages used
import React from "react";
import "./App.css";
import firebase from 'firebase'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
// Component Splitted

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;