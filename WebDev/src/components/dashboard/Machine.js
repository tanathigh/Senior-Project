import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import TableRow from "@material-ui/core/TableRow";
import Title from "../others/Title";

// Generate Order Data
function createData(id, name, responsibility, tel) {
  return { id, name, responsibility, tel };
}

const rows = [
  createData(0, "Nathan", "Engineer", "081-123-4567"),
  createData(1, "Lisa", "Engineer", "090-345-6789")
];

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
});

class Machine extends Component {
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
        <Title>Climate 1</Title>
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
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Responsibility</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Tel number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.responsibility}</TableCell>
                <TableCell align="right">{row.tel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Machine);
