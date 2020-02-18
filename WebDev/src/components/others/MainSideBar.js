import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import ReportIcon from "@material-ui/icons/Report";

class MainItems extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  render() {
    return (
      <List>
        <div>
          <ListItem button onClick={() => this.sendData("0")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => this.sendData("-1")}>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Alarm Report" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Employee" />
          </ListItem>
        </div>
      </List>
    );
  }
}

export default MainItems;
