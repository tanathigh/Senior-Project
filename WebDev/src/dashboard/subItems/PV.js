import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import Title from "../others/Title";
import ProgressBar from 'react-bootstrap/ProgressBar'

// Generate Order Data


const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
});

class PV extends Component {
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
        <Title>PV</Title>
        <ListItem>
          <ListItemIcon>
            <TemperatureIcon />
          </ListItemIcon>
          <ListItemText primary="Temperature (Celsius)" />
          <ListItemText secondary={this.props.data[4]} align="right" />
        </ListItem>
        <ProgressBar animated variant="success" now={40} />
        <ProgressBar animated variant="info" now={20} />
        <ProgressBar animated variant="warning" now={60} />
        <ProgressBar animated variant="danger" now={80} />
        <ListItem>
          <ListItemIcon>
            <HumidityIcon />
          </ListItemIcon>
          <ListItemText primary="Humidity (%)" />
          <ListItemText secondary={this.props.data[5]} align="right" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PressureIcon />
          </ListItemIcon>
          <ListItemText primary="Pressure (Pa)" />
          <ListItemText secondary={this.props.data[6]} align="right" />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PV);
