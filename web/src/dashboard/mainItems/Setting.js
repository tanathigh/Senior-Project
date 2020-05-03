import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Title from "../others/Title";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Alert from "@material-ui/lab/Alert";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";

const styles = (theme) => ({
  half: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
      width: 200,
    },
  },
  full: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
      width: 416,
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "6px 12px",
  },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.state = {
      email: null,
      fname: null,
      lname: null,
      tel: null,
      res: null,
      status: null,
    };
  }

  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }

  handleChange = (event) => {
    const user = this.state;
    user[event.target.name] = event.target.value;
    this.setState(user);
  };

  handleSubmit = () => {
    var self = this;
    this.setState({ email: this.props.emp[3] });
    if (this.state.fname === null) {
      this.setState({ fname: this.props.emp[0] });
    }
    if (this.state.lname === null) {
      this.setState({ lname: this.props.emp[1] });
    }
    if (this.state.tel === null) {
      this.setState({ tel: this.props.emp[2] });
    }
    if (this.state.res === null) {
      this.setState({ res: this.props.emp[6] });
    }
    var obj = this.state;
    delete obj.status;
    console.log(obj);
    axios
      .post("http://localhost:9000/editProfile/", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (res) {
        if (res.status == "200") {
          self.setState({ status: "200" });
        }
        console.log(self.state.status);
      })
      .catch(function (error) {
        self.setState({ status: "404" });
        console.log(error);
      });
  };

  render() {
    const classes = this.props.classes;
    const rows = this.props.emp;
    return (
      <React.Fragment>
        <Title>Setting</Title>

        <ValidatorForm
          className={classes.form}
          ref="form"
          onSubmit={this.handleSubmit}
          onError={(errors) => console.log(errors)}
          align="center"
        >
          <div className={classes.full}>
            <TextField
              disabled
              id="outlined-full-width"
              label="Email"
              style={{ margin: 8 }}
              placeholder={rows[3] || ""}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </div>
          <div className={classes.half}>
            <TextField
              id="outlined-full-width"
              label="First Name"
              name="fname"
              value={this.state.fname || ""}
              onChange={this.handleChange}
              style={{ margin: 8 }}
              placeholder={rows[0] || ""}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Last Name"
              name="lname"
              value={this.state.lname || ""}
              onChange={this.handleChange}
              style={{ margin: 8 }}
              placeholder={rows[1] || ""}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <div className={classes.full}>
            <TextField
              id="outlined-full-width"
              label="Tel Number"
              name="tel"
              value={this.state.tel || ""}
              onChange={this.handleChange}
              style={{ margin: 8 }}
              placeholder={rows[2] || ""}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <div className={classes.full}>
            <TextField
              id="outlined-full-width"
              label="Responding Machine Number"
              name="res"
              value={this.state.res || ""}
              onChange={this.handleChange}
              style={{ margin: 8 }}
              placeholder={String(rows[6]) || ""}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <Button
            variant="contained"
            size="small"
            type="submit"
            className={classes.submit}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <div className={classes.full}>
            {this.state.status == "200" && (
              <Alert severity="success">Update successful</Alert>
            )}
            {this.state.status == "404" && (
              <Alert severity="error">Update failed</Alert>
            )}
          </div>
        </ValidatorForm>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Setting);
