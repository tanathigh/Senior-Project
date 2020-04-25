import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import PressureIcon from "@material-ui/icons/Cloud";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Title from "../others/Title";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class PVChart extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { chart: "" };
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  handleClick() {
    var inputData = this.props.chart;
    var outputData = inputData.map(function (obj) {
      return Object.keys(obj)
        .sort()
        .map(function (key) {
          return obj[key];
        });
    });
    console.log(outputData);
  }
  render() {
    return (
      <React.Fragment>
        <Title>PV CHART</Title>
        <button onClick={() => this.handleClick()}>Click me</button>
      </React.Fragment>
    );
  }
}

export default PVChart;
