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
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Device</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>heater</TableCell>
              <TableCell align="right">
                {this.props.data[2] ? "ON" : "OFF"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>pump</TableCell>
              <TableCell align="right">
                {this.props.data[12] ? "ON" : "OFF"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>blower(Hz)</TableCell>
              <TableCell align="right">
                {(this.props.data[1]/640).toFixed(1) > 0 ? (this.props.data[1]/640).toFixed(1) : "OFF"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>damp on</TableCell>
              <TableCell align="right">
                {this.props.data[10] ? "ON" : "OFF"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>damp off</TableCell>
              <TableCell align="right">
                {this.props.data[9] ? "ON" : "OFF"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default OUT;
