import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
export default class Products extends Component {
  render() {
    ChangeTitle("Team : SelvFi");
    return (
      <section id="team" class="team section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Products</h2>
          
          </div>
        </div>
      </section>
    );
  }
}
