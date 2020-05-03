import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../others/Title";

// Generate Order Data
function createData(id, name, type, status) {
  return { id, name, type, status };
}

const rows = [
  createData(0, "1", "Climate controller", "on"),
  createData(1, "2", "Conveyor belt", "off"),
  createData(2, "3", "Robotic arm", "off")
];

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
});

class Home extends Component {
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
        <Title>Select Machine</Title>
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Machine #</TableCell>
              <TableCell style={{ color: "white" }}>Machine name</TableCell>
              <TableCell style={{ color: "white" }}>Connection status</TableCell>
              <TableCell style={{ color: "white" }} align="right">Select machine</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell align="right">
                  {row.status === "on" && (
                    <button type="button" onClick={() => this.sendData("1")}>
                      View
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
