import React, { Component } from "react";
import Header from "../components/others/Header";
import { default as Dashboard } from "../components/Dashboard";
// import axios from "axios";
// import { default as SignInSide } from "./components/SignIn";
// import { default as SignUp } from "./components/SignUp";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { sensors: "", page: "3" };
  }

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
        <Dashboard page={this.state.page} />
      </div>
    );
  }
}

export default Home;
