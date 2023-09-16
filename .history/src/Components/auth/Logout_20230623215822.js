import React from "react";
import { withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  handleLogout = () => {
   
    this.props.history.push("/login"); // Replace "/" with the appropriate route for your App component
  };

  render() {
    return <button style={{margin:"2rem",padding:"10px 50px",backgroundColor:"red", color:"white",borderRadius:"1rem",border:"none"}} onClick={this.handleLogout}>Logout</button>;
  }
}

export default withRouter(LogoutButton);