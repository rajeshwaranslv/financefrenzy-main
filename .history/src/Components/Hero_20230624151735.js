import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChangeTitle } from "./util/ChangeTitle";

const Hero = () => {
  useEffect(() => {
    ChangeTitle("Welcome, SelvFi!");
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-xl-12 " align="center">
            <div id="container"></div>
            <h4 style={{ color: "white" }}>
              Cherish Yesterday, Live Today, Dream Tomorrow!
            </h4>
            <h1>We help build your Dream!</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
