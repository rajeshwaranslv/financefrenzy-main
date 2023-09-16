import React, { Component } from "react";
export default class Contact extends Component{
  constructor(props) {
    super(props);
      console.log(props)
  
  }
    render(){
        return(
            <section id="contact" class="contact">
            <div class="container-fluid mt-5" data-aos="fade-up">
             <div class="section-title">
                <h2>Contact</h2>
              </div>
             <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="info-box">
                        <i class="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>18416 Clavemorr Castle Ct, Charlotte, NC 28277</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-envelope"></i>
                        <h3>Email Us</h3>
                        <p><a href="mailto:selva.hgi@gmail.com">Email: selva.hgi@gmail.com</a></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-phone-call"></i>
                        <h3>Call Us</h3>
                        <p><a href="tel: +1-972-998-7537 ">Phone: +1-972-998-7537 </a></p>
                      </div>
                    </div>
                  </div>
      
                </div>
      
                <div class="col-lg-6">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedGyzTjXRBMurXMnb7vAquvLfgVjS7TuWo0lfKp-yiHl-zSA/viewform?embedded=true" width="500" height="1707" frameborder="0" marginheight="0" marginwidth="0"  >Loading…</iframe>
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
}