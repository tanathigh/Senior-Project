import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Monitor";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
