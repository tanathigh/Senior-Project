import React, { Component } from "../../node_modules/react";
import Header from "../dashboard/others/Header";
import { default as Dashboard } from "../dashboard/Dashboard";
// import axios from "axios";
// import { default as SignInSide } from "./components/SignIn";
// import { default as SignUp } from "./components/SignUp";

class DashPage extends Component {
  callbackFunction = childData => {
    this.setState({ page: childData });
  };
  componentDidMount() {
    // axios.get("http://localhost:5000/sensors").then(res => {
    //   this.setState({ sensors: res });
    //   console.log(res);
    // });
  }
  render() {
    return (
      <div>
        <Header />
        <Dashboard parentCallback={this.callbackFunction} />
      </div>
    );
  }
}

export default DashPage;
