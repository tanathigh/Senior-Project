import React, { Component } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

let Index = 0;
const updateIndex = () => {
  Index++;
  return Index;
};

class Employee extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  render() {
    const rows = this.props.emps;
    return (
      <React.Fragment>
        <Title>EMPLOYEE</Title>
        <br />
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Firstname</TableCell>
              <TableCell style={{ color: "white" }}>Lastname</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Tel number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={updateIndex()}>
                <TableCell>{row.firstname}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">{row.tel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
      </React.Fragment>
    );
  }
}

export default Employee;
