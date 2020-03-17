import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import EditIcon from "@material-ui/icons/Edit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import Title from "../others/Title";
import Button from "@material-ui/core/Button";

class SV extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  render() {
    return (
      <React.Fragment>
        <Title>SV</Title>
        <ListItem>
          <ListItemIcon>
            <TemperatureIcon />
          </ListItemIcon>
          <ListItemText primary="Temperature (Celsius)" />
          <ListItemText secondary={this.props.data[7]} align="right" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HumidityIcon />
          </ListItemIcon>
          <ListItemText primary="Humidity (%)" />
          <ListItemText secondary={this.props.data[8]} align="right" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PressureIcon />
          </ListItemIcon>
          <ListItemText primary="Pressure (Pa)" />
          <ListItemText secondary={this.props.data[9]} align="right" />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default SV;
