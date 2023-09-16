import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ChangeTitle } from "./util/ChangeTitle";
export default class Hero extends Component {
  constructor(props) {
    super(props);
      console.log("Hero"props)
  
  }
  render() {
    ChangeTitle("Welcome, SelvFi!");
    return (
      <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            
            <div class="col-xl-12 "align="center">
              <div id="container" ></div>
              <h4 style={{color:"white"}}>
                Cherish Yesterday, Live Today,
                Dream Tomorrow!
              </h4>
              <h1>We help build
                your Dream!</h1>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
