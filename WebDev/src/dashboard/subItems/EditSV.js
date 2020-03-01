import React, { Component } from "react";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function createData(id, name, value) {
  return { id, name, value };
}

class EditSV extends Component {
  render() {
    const rows = [
      createData(0, "Temperature", this.props.data[7]),
      createData(1, "Humidity", this.props.data[8]),
      createData(2, "Pressure", this.props.data[9])
    ];
    return (
      <React.Fragment>
        <Title>Edit SV</Title>
        <div></div>
        <div>
          <Table size="small">
            <TableHead>
              <TableRow style={{ backgroundColor: "#343a40" }}>
                <TableCell style={{ color: "white" }}>Sensor</TableCell>
                <TableCell style={{ color: "white" }}>Old Value</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  New Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
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
}

export default EditSV;
