import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class About extends Component {
  componentDidMount() {
    document.title = 'About';
    console.log("About")
  }
  render() {
    ChangeTitle("About : SelvFi");
    
    return (
      <section id="about" class="about section-bg">
      div

      </section>
    );
  }
}
