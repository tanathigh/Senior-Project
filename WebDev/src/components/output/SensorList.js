import React, { Component } from "react";
import SensorItem from "./SensorItem";

class SensorList extends Component {
  showSensors() {
    return (
      this.props.sensors &&
      this.props.sensors.map(sensor => <SensorItem key={sensor.sensorId} {...sensor} />)
    );
  }

  render() {
    return <div className="row">{this.showSensors()}</div>;
  }
}

export default SensorList;
