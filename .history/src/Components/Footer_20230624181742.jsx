import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Footer = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div class="container-fluid">
    <div class="row">
      <center>
        <div
          class="col-lg-6 col-md-8 col-sm-12 col-12 footer-newsletter"
          align="center"
        >
          <form action="" method="post" className="form-footer">
            <input type="email" name="email" />
            <input
              style={{ background: "rgb(48, 140, 201)" }}
              type="submit"
              value="Subscribe newsletter"
              required
            />
          </form>
        </div>
      </center>
    </div>
  </div>
  );
};

export default Hero;
