import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    ChangeTitle("Footer");
    return (
      <div class="container-fluid">
        <div class="row">
        <div class="col-lg-5 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" required />
            </form>
          </div>
          
          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <Link to="/">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{" "}
                <Link to="/About">About us</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{" "}
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

        <div class="col-lg-3 col-md-6 footer-links">
            <h4>My Account</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Sign In</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Register</a>
              </li>

            </ul>
          </div>

     
        </div>
      </div>
    );
  }
}
