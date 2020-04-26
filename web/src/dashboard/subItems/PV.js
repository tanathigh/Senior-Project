import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import Title from "../others/Title";
import ProgressBar from "react-bootstrap/ProgressBar";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
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
            <PressureIcon />
          </ListItemIcon>
          <ListItemText primary="Pressure" />
          <ListItemText
            secondary={(this.props.data[4] / 20).toFixed(1)}
            align="right"
          />
          <ListItemText primary="[0-30]" align="right" />
        </ListItem>
        <ProgressBar animated variant="warning" now={this.props.data[4] / 6} />
        <ListItem>
          <ListItemIcon>
            <TemperatureIcon />
          </ListItemIcon>
          <ListItemText primary="Temperature" />
          <ListItemText
            secondary={(this.props.data[6] / 2 - 30).toFixed(1)}
            align="right"
          />
          <ListItemText primary="[15-40]" align="right" />
        </ListItem>
        <ProgressBar
          animated
          variant="danger"
          now={(this.props.data[6] - 90) * 2}
        />
        <ListItem>
          <ListItemIcon>
            <HumidityIcon />
          </ListItemIcon>
          <ListItemText primary="Humidity" />
          <ListItemText
            secondary={(this.props.data[7] / 2).toFixed(1)}
            align="right"
          />
          <ListItemText primary="[0-100]" align="right" />
        </ListItem>
        <ProgressBar animated variant="info" now={this.props.data[7] / 2} />
        <br />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PV);
