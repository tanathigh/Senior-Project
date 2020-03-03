import React, { Component } from "react";
import Title from "../others/Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

function createData(id, name, value) {
  return { id, name, value };
}

class EditSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sv: {
        sv1: this.props.data[7],
        sv2: this.props.data[8],
        sv3: this.props.data[9]
      },
      status: null
    };
  }

  handleChange = event => {
    const { sv } = this.state;
    sv[event.target.name] = event.target.value;
    this.setState({ sv });
  };

  handleSubmit = () => {
    var obj = this.state.sv;
    var self = this;
    axios
      .post("http://localhost:9000/updateSV/", obj, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        if (res.status == "200") {
          self.setState({ status: true });
        } else {
          self.setState({ status: false });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { sv } = this.state;
    return (
      <React.Fragment>
        <Title>Edit SV</Title>
        <div></div>
        <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
          >
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
                <TableRow>
                  <TableCell>Temperature</TableCell>
                  <TableCell>{this.props.data[7]}</TableCell>
                  <TableCell align="right">
                    <TextValidator
                      required
                      label="New value"
                      name="sv1"
                      validators={[
                        "minNumber:0",
                        "maxNumber:2000",
                        "matchRegexp:^[0-9]*$"
                      ]}
                      errorMessages={["New value is not valid"]}
                      value={sv.sv1}
                      onChange={this.handleChange}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Humidity</TableCell>
                  <TableCell>{this.props.data[8]}</TableCell>
                  <TableCell align="right">
                    <TextValidator
                      required
                      label="New value"
                      name="sv2"
                      validators={[
                        "minNumber:0",
                        "maxNumber:2000",
                        "matchRegexp:^[0-9]*$"
                      ]}
                      errorMessages={["New value is not valid"]}
                      value={sv.sv2}
                      onChange={this.handleChange}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pressure</TableCell>
                  <TableCell>{this.props.data[9]}</TableCell>
                  <TableCell align="right">
                    <TextValidator
                      required
                      label="New value"
                      name="sv3"
                      validators={[
                        "minNumber:0",
                        "maxNumber:2000",
                        "matchRegexp:^[0-9]*$"
                      ]}
                      errorMessages={["New value is not valid"]}
                      value={sv.sv3}
                      onChange={this.handleChange}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <br />
            <div align="center">
              <Button
                size="small"
                type="submit"
                variant="contained"
                color="default"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </ValidatorForm>
          {this.state.status === true && (
            <Alert severity="success">Update Successful</Alert>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default EditSV;
