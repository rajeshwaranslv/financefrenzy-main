import React from 'react';
import firebase from '../../firebase';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        // Additional logic or database operations
      })
      .catch((error) => {
        // Registration failed
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ error: errorMessage });
      });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div>
        <h2>Register</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default Register;
