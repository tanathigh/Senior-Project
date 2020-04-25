import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import PressureIcon from "@material-ui/icons/Cloud";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
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
        <Title>IV</Title>
        <ListItem>
          <ListItemIcon>
            <TemperatureIcon />
          </ListItemIcon>
          <ListItemText
            secondary={(this.props.data[3] / 2 - 30).toFixed(1)}
            align="center"
          />
          <ListItemText primary="°C" align="right" />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default SV;
