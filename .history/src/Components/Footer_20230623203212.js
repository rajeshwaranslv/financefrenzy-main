import React, { Component } from "react";
import { ChangeTitle } from "./util/ChangeTitle";
import onlog
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
   handleLogout = () => {
    // Perform logout logic
    onLogout();

    // Redirect to App.js (assuming it is the root component)
    history.push('/');
  };
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
              <button style={{margin:"2rem",padding:"10px 50px",backgroundColor:"red", color:"white",borderRadius:"1rem",border:"none"}} onClick={this.handleLogout}>Logout</button>
            </div>
          </center>
        </div>
      </div>
    );
  }
}