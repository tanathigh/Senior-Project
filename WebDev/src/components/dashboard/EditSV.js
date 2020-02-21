import React from "react";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function createData(id, name, value, date) {
  return { id, name, value, date };
}

const rows = [
  createData(0, "Temperature", "100", "16 Mar, 2019"),
  createData(1, "Humidity", "50", "16 Mar, 2019"),
  createData(2, "Pressure", "1", "16 Mar, 2019")
];

export default function EditSV() {
  return (
    <React.Fragment>
      <Title>Edit SV</Title>
      <div>
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "#343a40" }}>
              <TableCell style={{ color: "white" }}>Sensor</TableCell>
              <TableCell style={{ color: "white" }}>Modified date</TableCell>
              <TableCell style={{ color: "white" }}>Old Value</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                New value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell align="right">
                  <Input
                    placeholder="New value"
                    inputProps={{
                      "aria-label": "description"
                    }}
                    container={{
                      display: "flex",
                      flexWrap: "wrap"
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <div align="center">
          <Button
            size="small"
            variant="contained"
            color="default"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
