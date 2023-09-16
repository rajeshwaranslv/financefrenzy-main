import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../firebase";
export default class About extends Component {
    constructor(props) {
    super(props);
      console.log(props)
  
  }
  
  componentDidMount() {
    document.title = 'About';
    console.log("About")
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
    ChangeTitle("About : SelvFi");
    console.log("Render About")
    return (
      {user ? (
        <Home />
        
      ) : (
        <div>
          <Login />
          <Register />
        </div>
      )}

      
  
    );
  }
}
