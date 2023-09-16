import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import onLogout from 'react'
import { useHistory } from "react-router-dom";
import Lo
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
  
 
  
  render() {
    ChangeTitle("Footer");
    return (
      <div class="container-fluid">
        <div class="row">
          <center>
            <div
              class="col-lg-6 col-md-8 col-sm-12 col-12 footer-newsletter"
              align="center"
            >
              <form action="" method="post" className="form-footer">
                <input type="email" name="email" />
                <input
                  style={{ background: "rgb(48, 140, 201)" }}
                  type="submit"
                  value="Subscribe newsletter"
                  required
                />
                      

              </form>

            </div>
          </center>
        </div>
      </div>
    );
  }
}
