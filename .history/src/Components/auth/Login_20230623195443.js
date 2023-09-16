import React from 'react';
import firebase from '../';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: null });
        // Redirect or perform any other actions after successful login
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <h2>Login</h2>
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
        <button onClick={this.handleLogin}>Login</button>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Login;
