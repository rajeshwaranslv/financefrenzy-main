import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ChangeTitle } from "./util/ChangeTitle";
export default class Hero extends Component {
  render() {
    ChangeTitle("Welcome, SelvFi!");
    return (
      <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
            
            <div class="col-xl-12 "align="center">
              <div id="container" ></div>
              <h1  align="justify">
                Cherish Yesterday, Live Today,<br/>
                Dream Tomorrow, We help build
                your Dream!
              </h1>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
