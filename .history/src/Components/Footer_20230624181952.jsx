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


    <div class="container-fluid d-md-flex py-4">
    <div class="me-md-auto text-center text-md-start">
      <div class="copyright">
        &copy;
        <strong>
          <span>financeFrenzy, </span>
        </strong>
         ©2021 Finance Frenzy,
         Headquarters: 18416 Clavemorr Castle Ct, Charlotte, NC 28277
        <p><a style={{color:"rgb(48, 140, 201)"}} href="mailto:selva.hgi@gmail.com">Email:selva.hgi@gmail.com</a><a style={{color:"rgb(48, 140, 201)"}} href="tel: +1-972-998-7537 "> | Phone:+1-972-998-7537 </a></p>
     
      </div>
      <div  class="credits">
        Designed by <a style={{color:"rgb(48, 140, 201)"}} href="https://bootstrapmade.com/">Learn TEK In</a>
      </div>
    </div>
    <div class="social-links text-center text-md-end pt-3 pt-md-0">
      <a href="#" class="twitter">
        <i class="bx bxl-twitter"></i>
      </a>
      <a href="#" class="facebook">
        <i class="bx bxl-facebook"></i>
      </a>
      <a href="https://www.instagram.com/" class="instagram">
        <i class="bx bxl-instagram"></i>
      </a>
      <a href="#" class="google-plus">
        <i class="bx bxl-skype"></i>
      </a>
      <a href="https://www.linkedin.com/in/" class="linkedin">
        <i class="bx bxl-linkedin"></i>
      </a>
    </div>
  </div>
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
