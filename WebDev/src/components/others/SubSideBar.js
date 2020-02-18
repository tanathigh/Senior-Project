import React, { Component } from "react";
import { ListItem, styled } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import BarChartIcon from "@material-ui/icons/BarChart";
import EditIcon from "@material-ui/icons/Edit";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from "@material-ui/core/Divider";

const StyledListItem = styled(ListItem)({
  backgroundColor: "#343a40"
});

class SubItems extends Component {
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
              primary="Machine 1"
              align="center"
            />
          </StyledListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <TemperatureIcon />
            </ListItemIcon>
            <ListItemText primary="Temperature" />
            <ListItemText secondary="100 C" align="right" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HumidityIcon />
            </ListItemIcon>
            <ListItemText primary="Humidity" />
            <ListItemText secondary="50%" align="right" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PressureIcon />
            </ListItemIcon>
            <ListItemText primary="Pressure" />
            <ListItemText secondary="1 Pa" align="right" />
          </ListItem>
          <div align="center">
            <Button
              size="small"
              variant="contained"
              color="default"
              startIcon={<EditIcon />}
              onClick={() => this.sendData("1")}
            >
              Edit SV
            </Button>
          </div>
          <br />
          <Divider />
          <ListItem button onClick={() => this.sendData("2")}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="History Chart" />
          </ListItem>
        </div>
      </List>
    );
  }
}

export default SubItems;
