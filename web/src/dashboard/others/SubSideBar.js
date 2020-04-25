import React, { Component } from "react";
import { ListItem, styled } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleIcon from "@material-ui/icons/People";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InfoIcon from "@material-ui/icons/Info";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import ReportIcon from "@material-ui/icons/Report";

const StyledListItem = styled(ListItem)({
  backgroundColor: "#343a40"
});

class SubBar extends Component {
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
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText primary="Back" />
          </ListItem>
          <StyledListItem>
            <ListItemText
              primaryTypographyProps={{ style: { color: "white" } }}
              primary="Machine: Climate 1"
              align="center"
            />
          </StyledListItem>
          <Divider />
          <ListItem button onClick={() => this.sendData("1")}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Information" />
          </ListItem>
          <ListItem button onClick={() => this.sendData("2")}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="PV Chart" />
          </ListItem>
          <ListItem button onClick={() => this.sendData("3")}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Employee" />
          </ListItem>
          <ListItem button onClick={() => this.sendData("4")}>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <ReportIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Alarm Report" />
          </ListItem>
        </div>
      </List>
    );
  }
}

export default SubBar;
