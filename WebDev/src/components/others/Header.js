import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //this.state = {date: new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="." className="navbar-brand">
          <img src="/images/logo/logo.png" width="30" height="30" alt="" />
          &nbsp; Climate Control System
        </a>
        <span className="navbar-text">{this.state.date.toLocaleString()}</span>
      </nav>
    );
  }
}

export default Header;
