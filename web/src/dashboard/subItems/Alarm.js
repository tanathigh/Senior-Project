import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

let Index = 0;
const updateIndex = () => {
  Index++;
  return Index;
};

class Alarm extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }
  render() {
    const rows = this.props.alarm;
    function bgcolor(ConditionActive, Severity) {
      if (!ConditionActive) {
        return "#ffffff";
      } else {
        if (Severity === 1000) {
          return "#00ff00";
        } else if (Severity === 900) {
          return "#808080";
        } else if (Severity === 400) {
          return "#ff0000";
        } else if (Severity === 300) {
          return "#ff6600";
        } else if (Severity === 200) {
          return "#0099ff";
        } else if (Severity === 100) {
          return "#0033cc";
        }
      }
    }
    console.log(rows);
    return (
      <React.Fragment>
        <Title>OUTPUT</Title>
        <br />
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Date</TableCell>
              <TableCell style={{ color: "white" }}>Time</TableCell>
              <TableCell style={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={updateIndex()}
                style={{
                  backgroundColor: bgcolor(row.ConditionActive, row.Severity),
                }}
              >
                <TableCell>{row.EventTime.substring(0, 10)}</TableCell>
                <TableCell>{row.EventTime.substring(11, 19)}</TableCell>
                <TableCell>{row.Message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Alarm);
