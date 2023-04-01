import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    ChangeTitle("Footer");
    return (
      <div class="container-fluid">
        <div class="row">
     <center>
     <div class="col-lg-5 col-md-6 footer-newsletter" align="center">
        
        <form action="" method="post" >
          <input type="email" name="email" />
          <input style={{background:"rgb(48, 140, 201)"}} type="submit" value="Subscribe to our newsletter"  required />
        </form>
        
      </div>
     </center>
        </div>
      </div>
    );
  }
}
