import React, { Component } from "react";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import PressureIcon from "@material-ui/icons/Cloud";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(id, name, responsibility, tel) {
  return { id, name, responsibility, tel };
}

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class OUT extends Component {
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
        <Title>OUTPUT</Title>
        <br />
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Output Device</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Status
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Ini Temp</TableCell>
              <TableCell align="right">
                <ListItemText
                  secondary={(this.props.data[3] / 2 - 30).toFixed(1)}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[20-35 °C]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Blower </TableCell>
              <TableCell align="right">
                <ListItemText
                  secondary={(this.props.data[1] / 640).toFixed(1)}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[0-50 Hz]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Heater</TableCell>
              <TableCell align="right">
                <ListItemText
                  secondary={this.props.data[2] ? "ON" : "OFF"}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[ON/OFF]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pump</TableCell>

              <TableCell align="right">
                <ListItemText
                  secondary={this.props.data[12] ? "ON" : "OFF"}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[ON/OFF]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>damp on</TableCell>

              <TableCell align="right">
                <ListItemText
                  secondary={this.props.data[10] ? "ON" : "OFF"}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[ON/OFF]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>damp off</TableCell>
              <TableCell align="right">
                <ListItemText
                  secondary={this.props.data[9] ? "ON" : "OFF"}
                  align="right"
                />
              </TableCell>
              <TableCell align="right">[ON/OFF]</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br />
      </React.Fragment>
    );
  }
}

export default OUT;
