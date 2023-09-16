import React from 'react';
import firebase from './firebase';



import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log()
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

    // Add a listener to handle authentication state changes
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        this.setState({ user });
        console.log(user)
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