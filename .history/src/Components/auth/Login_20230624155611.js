import React from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  componentDidCatch

  render() {
    const { email, password, error } = this.state;
    
    return (
        <div className="container">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
        {error && <p className="text-danger">{error}</p>}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    );
  }
}

export default Login;
