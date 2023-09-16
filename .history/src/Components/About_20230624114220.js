import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      error: null,
    };
  }

  componentDidMount() {
    document.title = 'About';
    console.log("About")
  }
  render() {
    ChangeTitle("About : SelvFi");
    console.log("Render About")
    return (
      
      <section id="about" class="about section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="content col-xl-12 col-lg-12 d-flex align-items-center">
              <div class="content">
                <h1 class="logo-1 me-auto" >
                  <a to="" style={{color:"rgb(48, 140, 201)"}}>About: financeFrenzy</a>
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
                  among the most educated and well-trained in the industry.
                </p>
                <div class="container-fluid" data-aos="fade-up">
                  <div class="section-title">
                    <p>
                      <h1 align="left" className="mt-3">
                      Neelima Devineni
                      </h1>{" "}
                      <p align="left">Chair woman, Founder</p>

                      <h1 align="left" className="mt-3">
                      Selvavel Shanmugam
                  
                      </h1>{" "}
                      <p align="left">CEO, Co-Founder</p>
                      <p align="justify" className="mt-3">
                        Selvavel Shanmugam is a licensed financial professional
                        in the US states North Carolina, Georgia, and Texas.
                        Leveraging 30 years of skills, experience, and
                        relationships of enthusiastic leaders in the financial
                        industry, Selvavel helped families improve their lives
                        through sustaining financial solutions. Also provided
                        opportunity to ambitious individuals to be part of his
                        recession proof business.
                      </p>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
