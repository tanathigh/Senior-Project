import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import PressureIcon from "@material-ui/icons/Cloud";
import AlarmIcon from "@material-ui/icons/Alarm";
import Title from "../others/Title";

class Alarm extends Component {
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
        <Title>Alarm Bit</Title>
        <ListItem>
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <ListItemText primary="0-4" align="center" />
          <ListItemText secondary={this.props.data[8]} align="right" />
        </ListItem>
        <br />
        <ListItem>
          <ListItemText primary={(this.props.data[14] / 2 - 30).toFixed(1)} />
        </ListItem>
        <ListItem>
          <ListItemText primary={(this.props.data[14] / 2 - 30).toFixed(1)} />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default Alarm;
