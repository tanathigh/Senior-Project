import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AlarmIcon from "@material-ui/icons/Alarm";
import Title from "../others/Title";

class AlarmBit extends Component {
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
        <Title>ALARM BIT</Title>
        <ListItem>
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <ListItemText secondary={this.props.data[8]} align="center" />
          <ListItemText primary="[0-4]" align="right" />
        </ListItem>
        <br />
        <br />
        <ListItem>
          <ListItemText primary="0 : No alarm" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1-4 : Please contact the employees" />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default AlarmBit;
