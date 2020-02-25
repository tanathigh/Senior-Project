import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashPage from "./pages/DashPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/" component={DashPage} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
