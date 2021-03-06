import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Title from "../others/Title";

class Power extends Component {
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
        <Title>POWER</Title>
        <ListItem>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText
            secondary={this.props.data[11] ? "ON" : "OFF"}
            align="right"
          />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default Power;
