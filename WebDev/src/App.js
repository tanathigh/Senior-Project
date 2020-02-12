import "./App.css";
import React, { Component } from "react";
import Header from "./components/others/Header";
import { default as Dashboard } from "./components/monitor/Monitor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sensors: "" };
  }

  componentDidMount() {
    this.setState({
      sensors: [
        {
          sensorId: 1,
          sensorName: "Temperature",
          measurement: "120",
          thumbnail: "/images/sensor/temp.png"
        },
        {
          sensorId: 2,
          sensorName: "Humidity",
          measurement: "90",
          thumbnail: "/images/sensor/humid.png"
        },
        {
          sensorId: 3,
          sensorName: "Pressure",
          measurement: "200",
          thumbnail: "/images/sensor/press.png"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Monitor sensors={this.state.sensors} /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
