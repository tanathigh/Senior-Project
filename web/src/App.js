import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashPage from "./pages/DashPage";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={DashPage} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
