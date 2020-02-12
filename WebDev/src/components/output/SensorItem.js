import React, { Component } from "react";

class SensorItem extends Component {
  render() {
    const { sensorName, measurement, thumbnail } = this.props;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid" src={thumbnail} />
        <h5 className="mt-2">{sensorName}</h5>
        <p className="title text-right">{measurement} V</p>
      </div>
    );
  }
}
export default SensorItem;
