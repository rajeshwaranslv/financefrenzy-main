import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Products";
export default class About extends Component {
  render() {
    ChangeTitle("About : SelvFi");
    return (
      <section id="about" class="about section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="content col-xl-12 col-lg-12 d-flex align-items-center">
              <div class="content">
                <h1 class="logo me-auto">
                  <Link to="/">financeFrenzy</Link>
                </h1>

                <p align="justify">
                  Finance Frenzy is an independent financial services company
                  that offers vast array of investment, retirement and estate
                  planning products through a network of independent affiliates.
                  No matter what financial challenges clients may face, Finance
                  Frenzy has the experience and resources to create a successful
                  financial plan. Our experienced licensed professional help our
                  clients to complete a financial analysis, identify the
                  financial gap, and offer appropriate investment vehicles to
                  fill this gap. With all the unprecedented financial times, it
                  is important to help clients preserve their capital, while
                  seeking long-term growth and appreciation. Our associates are
                  among the most educated and well-trained in the industry{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Founders of financeFrenzy</h2>
            <p>
              <h1>Selvavel Shanmugam</h1>{" "}
              <p align="justify">
                Finance Frenzy Founder, Chairman & CEO Selvavel Shanmugam is a
                licensed financial professional in the US states North Carolina,
                Georgia, and Texas. Leveraging 30 years of skills, experience,
                and relationships of enthusiastic leaders in the financial
                industry, Selvavel helped families improve their lives through
                sustaining financial solutions. Also provided opportunity to
                ambitious individuals to be part of his recession proof
                business.
              </p>
              <h1 className="mt-3">Neelima Devineni</h1>{" "}
              <p align="center">Co-Founder, CEO</p>
            </p>
            <ul class="nav nav-tabs">
       
            <li class="nav-item">
                <Link class="nav-link " to="/Services">
                  Our Services
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link scrollto" to="/Products">
                  Our Products
              </Link>
              </li>

           
            <Switch>
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Products" component={Products} />
            </Switch>
            </ul>
  
              
          </div>
        </div>
      </section>
    );
  }
}
