import React, { Component } from "../../node_modules/react";
import Header from "../dashboard/others/Header";
import Dashboard from "../dashboard/Dashboard";
// import axios from "axios";
// import { default as SignInSide } from "./components/SignIn";
// import { default as SignUp } from "./components/SignUp";

class DashPage extends Component {
  callbackFunction = (childData) => {
    this.setState({ page: childData });
  };

  render() {
    if (this.props.location.state != null) {
      return (
        <div>
          <Header />
          <Dashboard
            parentCallback={this.callbackFunction}
            id={this.props.location.state.id}
          />
        </div>
      );
    } else {
      this.props.history.push({ pathname: "/signin" });
      return <div>Routing to signin page</div>;
    }
  }
}

export default DashPage;
