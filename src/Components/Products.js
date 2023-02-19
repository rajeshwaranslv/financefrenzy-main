import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
export default class Products extends Component {
  render() {
    ChangeTitle("Products : SelvFi");
    return (
      <section id="team" class="team section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Products</h2>
          </div>
          <p align="justify">
            Meeting the financial challenges of today’s consumers requires a
            unique mix of experience and expertise. Backed by a wealth of
            resources, Finance Frenzy is uniquely positioned to meet these
            challenges. As an independent financial services company, Finance
            Frenzy is able to bring together the best products and companies to
            deliver unparalleled financial solutions to its clients. These
            world-class products, concepts, and support companies gives Finance
            Frenzy a competitive advantage in the marketplace.
          </p>
        </div>
      </section>
    );
  }
}
