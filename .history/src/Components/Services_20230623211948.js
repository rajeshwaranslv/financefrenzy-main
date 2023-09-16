import React, { Component } from "react";
import Chang
export default class Services extends React.Component {
  componentDidMount() {
    document.title = "Services";
  }
  render() {
    ChangeTitle("Services : SelvFi");
    return (
      <section id="services" class="services section-bg ">
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Services</h2>
            <h4 style={{ color: "rgb(48, 140, 201)" }}>
              Get to value faster with Finance Frenzy expertise
            </h4>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-briefcase"></i>
                <p>
                  We show people how to build guaranteed income streams for
                  life.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-card-checklist"></i>

                <p>
                  We are specialized in educating others on how to increase cash
                  flow, achieve and preserve wealth, build an emergency fund,
                  and how to eliminate debt.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-bar-chart"></i>

                <p>
                  We have an opportunity for people from all backgrounds who are
                  looking to diversify their current portfolio by adding
                  additional revenue streams.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-binoculars"></i>

                <p>Financial Needs Analysis (FNA)</p>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                <i class="bi bi-brightness-high"></i>

                <p>
                  We assist in helping you find the right coverage for your
                  health and life that is affordable. We work with top firms to
                  get the goals achieved.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-binoculars"></i>

                <p>D.I.M.E. + Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
