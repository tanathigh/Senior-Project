import React, { Component } from "react";
import Avatar from "../../node_modules/@material-ui/core/Avatar";
import Button from "../../node_modules/@material-ui/core/Button";
import CssBaseline from "../../node_modules/@material-ui/core/CssBaseline";
import Link from "../../node_modules/@material-ui/core/Link";
import Grid from "../../node_modules/@material-ui/core/Grid";
import Box from "../../node_modules/@material-ui/core/Box";
import LockOutlinedIcon from "../../node_modules/@material-ui/icons/LockOutlined";
import Typography from "../../node_modules/@material-ui/core/Typography";
import { withStyles } from "../../node_modules/@material-ui/core/styles";
import Container from "../../node_modules/@material-ui/core/Container";
import Alert from "../../node_modules/@material-ui/lab/Alert";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: "",
        lname: "",
        tel: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      status: null,
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== this.state.user.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    var obj = this.state.user;
    var self = this;
    axios
      .post("http://localhost:9000/signUp/", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (res) {
        console.log(res.status);
        if (res.status == "200") {
          self.setState({ status: "200" });
        } else {
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
    const { user } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <ValidatorForm
            className={classes.form}
            ref="form"
            onSubmit={this.handleSubmit}
            onError={(errors) => console.log(errors)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="First Name"
                  name="fname"
                  validators={["required", "matchRegexp:^[A-Za-z]+$"]}
                  errorMessages={[
                    "this field is required",
                    "firstname is not valid",
                  ]}
                  value={user.fname}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="Last Name"
                  name="lname"
                  validators={["required", "matchRegexp:^[A-Za-z]+$"]}
                  errorMessages={[
                    "this field is required",
                    "lastname is not valid",
                  ]}
                  value={user.lname}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="Tel Number"
                  name="tel"
                  validators={["required", "matchRegexp:^[0-9]*$"]}
                  errorMessages={["this field is required", "tel is not valid"]}
                  value={user.tel}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="Email"
                  name="email"
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  value={user.email}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  value={user.password}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  fullWidth
                  required
                  variant="outlined"
                  label="Repeat password"
                  name="repeatPassword"
                  type="password"
                  validators={["isPasswordMatch", "required"]}
                  errorMessages={[
                    "password mismatch",
                    "this field is required",
                  ]}
                  value={user.repeatPassword}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            {this.state.status == "200" && (
              <Alert severity="success">Signup Successful</Alert>
            )}
            {this.state.status == "404" && (
              <Alert severity="warning">This email address is invalid</Alert>
            )}
            {this.state.status == "300" && (
              <Alert severity="error">Signup failed</Alert>
            )}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignUp);
