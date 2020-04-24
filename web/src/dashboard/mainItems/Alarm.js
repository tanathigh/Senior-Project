import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../others/Title";

// Generate Order Data
function createData(id, date, tag, priority, quality, desc) {
  return { id, date, tag, priority, quality, desc };
}

const rows = [
  createData(0, "16 Mar, 2019", "Climate 1", "Low", "-50", "-"),
  createData(1, "16 Mar, 2019", "Climate 1", "High", "+100", "-"),
  createData(2, "16 Mar, 2019", "Climate 1", "Very High", "+200", "-")
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Alarm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Alarms</Title>
      <Table size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: "#343a40" }}>
            <TableCell style={{ color: "white" }}>Date</TableCell>
            <TableCell style={{ color: "white" }}>Machine</TableCell>
            <TableCell style={{ color: "white" }}>Priority</TableCell>
            <TableCell style={{ color: "white" }}>Quality</TableCell>
            <TableCell style={{ color: "white" }} align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.tag}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <TableCell>{row.quality}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more alarms
        </Link>
      </div>
    </React.Fragment>
  );
}
