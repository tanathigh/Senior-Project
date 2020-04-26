import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import PressureIcon from "@material-ui/icons/Cloud";
import HumidityIcon from "@material-ui/icons/Opacity";
import Title from "../others/Title";

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
            <PressureIcon />
          </ListItemIcon>
          <ListItemText
            secondary={(this.props.data[13] / 20).toFixed(1)}
            align="center"
          />
          <ListItemText primary="Pa" align="right" />
        </ListItem>
        <br />
        <ListItem>
          <ListItemIcon>
            <TemperatureIcon />
          </ListItemIcon>
          <ListItemText
            secondary={(this.props.data[14] / 2 - 30).toFixed(1)}
            align="center"
          />
          <ListItemText primary="°C" align="right" />
        </ListItem>
        <br />
        <ListItem>
          <ListItemIcon>
            <HumidityIcon />
          </ListItemIcon>
          <ListItemText primary="-" align="center" />
          <ListItemText primary="%rh" align="right" />
        </ListItem>
        <br />
      </React.Fragment>
    );
  }
}

export default SV;
