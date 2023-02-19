import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class End extends Component {
  render() {
    ChangeTitle("Welcome, SelvFi!");
    return (
      <div class="container-fluid d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy;
            <strong>
              <span>financeFrenzy, </span>
            </strong>
             ©2021 Finance Frenzy,
            LLC Headquarters: 18416 Clavemorr Castle Ct, Charlotte, NC 28277
            <p><a href="mailto:selva.hgi@gmail.com">Email:selva.hgi@gmail.com</a><a href="tel: +1-972-998-7537 "> | Phone:+1-972-998-7537 </a></p>
         
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">Learn TEK In</a>
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
    );
  }
}
