import React, { Component } from "react";
 
export default class Careers extends Component {
  componentDidMount() {
    document.title = 'Careers';
  }
  render() {
 
    return (
      <section id="careers" class="contact">
        <div class="container-fluid mt-5" data-aos="fade-up">
          <div class="section-title">
            <h2>Careers</h2>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3>Get Started Today</h3>
                    <p align="justify">
                      We believe that every individual, family and business
                      deserve a chance to achieve their goals. We aid
                      entrepreneurs with information on how to build and
                      stabilize their business or organization. If you are open
                      to new opportunities and looking for a career, we are
                      looking for new team members in all states. If you would
                      like to schedule a confidential meeting to review the
                      details of becoming an entrepreneur then contact <b style={{color:'cadetblue'}}>Finance
                      Frenzy </b>today!
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-lg-6 pr-6">
            <div class="info-box1 ">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedGyzTjXRBMurXMnb7vAquvLfgVjS7TuWo0lfKp-yiHl-zSA/viewform?embedded=true" width="500" height="1707" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
