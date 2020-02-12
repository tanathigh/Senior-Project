import "./App.css";
import React, { Component } from "react";
import Header from "./components/others/Header";
import { default as Dashboard } from "./components/monitor/Monitor";
import { default as SignInSide } from "./components/sign-in";
import { default as SignUp } from "./components/sign-up";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sensors: "" };
  }

  componentDidMount() {
    // fetch("http://localhost:3001/sensors", { method: "GET" })
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({ product: res });
    //   });
    axios.get("http://localhost:3001/sensors").then(res => {
      this.setState({ sensors: res });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
