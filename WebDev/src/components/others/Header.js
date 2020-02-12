import React, { Component } from "react";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import Typography from "@material-ui/core/Typography";

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

        <TemperatureIcon style={{ fill: "#ec1c24" }} />
        <Typography variant="h6" style={{ color: "#ffebee" }}>
          100 C
        </Typography>

        <HumidityIcon style={{ fill: "#0072ea" }} />
        <Typography variant="h6" style={{ color: "#ffebee" }}>
          50 %
        </Typography>

        <PressureIcon style={{ fill: "#68ec1c" }} />
        <Typography variant="h6" style={{ color: "#ffebee" }}>
          1 Pa
        </Typography>

        <span className="navbar-text">{this.state.date.toLocaleString()}</span>
      </nav>
    );
  }
}

export default Header;
