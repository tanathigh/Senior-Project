import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../others/Title";
import Button from "@material-ui/core/Button";

// Generate Order Data
function createData(id, name, type, status) {
  return { id, name, type, status };
}

const rows = [
  createData(0, "Climate controller", "Climate 1", "on"),
  createData(1, "Conveyor belt", "Belt 1", "off"),
  createData(2, "Robotic arm", "Arm 1", "off")
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Today Alarms</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Connection status</TableCell>
            <TableCell align="right">Choose Machine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.status}</TableCell>
              {row.status === "on" && (
                <TableCell align="right">
                  <button type="button" >Choose</button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
