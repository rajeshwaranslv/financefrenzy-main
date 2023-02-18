import React, { Component } from 'react';
import { ChangeTitle } from './util/ChangeTitle';
export default class Services extends Component{
    render(){
      ChangeTitle("Services : SelvFi");
        return(
            <section id="services" class="services section-bg ">
            <div class="container-fluid" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Services</h2>
                <p>
Get to value faster with ServiceNow expertise</p>
              </div>
      
              <div class="row">
                <div class="col-md-6">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i class="bi bi-briefcase"></i>
                    <h4><a href="#">Expert Services</a></h4>
                    <p>Plan and implement with Finance Frenzy experts. Deliver extraordinary business outcomes and reach value faster with less risk.</p>
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i class="bi bi-card-checklist"></i>
                    <h4><a href="#">Assure Co-Delivery Services</a></h4>
                    <p>Plan and implement with ServiceNow experts. Deliver extraordinary business outcomes and reach value faster with less risk.</p>
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i class="bi bi-bar-chart"></i>
                    <h4><a href="#">Success and Support Services</a></h4>
                    <p>Get the expert guidance and support you need throughout your journey.</p>
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <i class="bi bi-binoculars"></i>
                    <h4><a href="#">Technical Support</a></h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                    <i class="bi bi-brightness-high"></i>
                    <h4><a href="#">Customer Success Center</a></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                    <i class="bi bi-calendar4-week"></i>
                    <h4><a href="#">Now Create</a></h4>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
 
        )
    }
}