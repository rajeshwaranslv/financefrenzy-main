import React from "react";
import { withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  handleLogout = () => {
   
    this.props.history.push("/"); // Replace "/" with the appropriate route for your App component
  };

  render() {
    return <button onClick={this.handleLogout}>Logout</button>;
  }
}

export default withRouter(LogoutButton);