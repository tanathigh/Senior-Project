import React, { Component } from "react";
import Title from "../others/Title";
import { Chart } from "react-google-charts";
import Button from "@material-ui/core/Button";

class PVChart extends Component {
  constructor(props) {
    super(props);
    this.state = { chart: "", num: 0 };
    this.sendData = this.sendData.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  handleClick1() {
    this.setState((state) => ({
      num: 1,
    }));
  }
  handleClick2() {
    this.setState((state) => ({
      num: 2,
    }));
  }
  handleClick3() {
    this.setState((state) => ({
      num: 3,
    }));
  }
  render() {
    function removeE2(array, Idx1, Idx2) {
      return array.map(function (arr) {
        return arr.filter(function (el, idx) {
          return idx !== Idx1 && idx !== Idx2;
        });
      });
    }
    var inputData = this.props.chart;
    var outputData = inputData.map(function (obj) {
      return Object.keys(obj)
        .sort()
        .map(function (key) {
          return obj[key];
        });
    });
    outputData.reverse();
    let outputData1 = removeE2(outputData, 2, 3);
    outputData1 = outputData1.map((x) => [x[0], x[1] / 20]);
    outputData1.unshift(["x", "Pressure"]);
    let outputData2 = removeE2(outputData, 1, 3);
    outputData2 = outputData2.map((x) => [x[0], x[1] / 2 - 30]);
    outputData2.unshift(["x", "Temperature"]);
    let outputData3 = removeE2(outputData, 1, 2);
    outputData3 = outputData3.map((x) => [x[0], x[1] / 2]);
    outputData3.unshift(["x", "Humidity"]);
    console.log(outputData1);

    return (
      <React.Fragment>
        <Title>PV HISTORY CHART</Title>
        <Button onClick={this.handleClick1}>Show Pressure Chart</Button>
        <Button onClick={this.handleClick2}>Show Temperature Chart</Button>
        <Button onClick={this.handleClick3}>Show Humidity Chart</Button>
        {this.state.num === 1 && (
          <Chart
            width={"1200px"}
            height={"400px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={outputData1}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Pressure(Pa)",
                viewWindow: { min: 0, max: 30 },
              },
              series: {
                1: { curveType: "function" },
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        )}
        {this.state.num === 2 && (
          <Chart
            width={"1200px"}
            height={"400px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={outputData2}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Temperature(°C)",
                viewWindow: { min: 10, max: 50 },
              },
              series: {
                1: { curveType: "function" },
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        )}
        {this.state.num === 3 && (
          <Chart
            width={"1200px"}
            height={"400px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={outputData3}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Humidity(%rh)",
                viewWindow: { min: 20, max: 100 },
              },
              series: {
                1: { curveType: "function" },
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default PVChart;
