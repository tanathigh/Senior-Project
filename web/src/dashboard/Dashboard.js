import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { default as SubBar } from "./others/SubSideBar";
import { default as MainBar } from "./others/MainSideBar";
import Home from "./mainItems/Home";
import Setting from "./mainItems/Setting";
import Employee from "./subItems/Employee";
import Power from "./subItems/Power";
import AlarmBit from "./subItems/AlarmBit";
import Alarm from "./subItems/Alarm";
import PVChart from "./subItems/PVChart";
import Slider from "./subItems/Slider";
import SV from "./subItems/SV";
import PV from "./subItems/PV";
import Out from "./subItems/Out";
import axios from "axios";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Contact @"}
      <Link color="inherit" href="https://material-ui.com/">
        Senior Project
      </Link>
    </Typography>
  );
}

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
});

class Dashboard extends Component {
  state = { data: "", chart: "", alarm: "", emp: "", page: "0", emps: "" };

  callbackFunction = (childData) => {
    this.setState({ page: childData }, () => this.setPage());
  };

  constructor(props) {
    super(props);
    this.fixedHeightPaper = clsx(this.props.paper, this.props.fixedHeight);
    this.setPage = this.setPage.bind(this);
  }

  setPage = () => {
    if (this.state.page === "-1") {
      axios
        .get("http://localhost:9000/getEmp", { params: { id: this.props.id } })
        .then((res) => {
          {
            this.setState({
              emp: Object.values(res.data.recordset[0]),
            });
            //console.log(Object.values(res.data.recordset[0]));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (this.state.page === "1") {
      axios
        .get("http://localhost:9000/getData")
        .then((res) => {
          {
            this.setState({
              data: Object.values(res.data.recordset[0]),
            });
            //console.log(Object.values(res.data.recordset[0]));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get("http://localhost:9000/getHistory")
        .then((res) => {
          {
            this.setState({
              chart: Object.values(res.data.recordset),
            });
            //console.log(Object.values(res.data.recordset));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get("http://localhost:9000/getAlarm")
        .then((res) => {
          {
            this.setState({
              alarm: Object.values(res.data.recordset),
            });
            //console.log(Object.values(res.data.recordset));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get("http://localhost:9000/getEmps")
        .then((res) => {
          {
            this.setState({
              emps: Object.values(res.data.recordset),
            });
            console.log(Object.values(res.data.recordset));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper),
          }}
        >
          <Divider />
          {this.state.page > 0 ? (
            <SubBar
              page={this.state.page}
              parentCallback={this.callbackFunction}
            />
          ) : (
            <MainBar
              page={this.state.page}
              parentCallback={this.callbackFunction}
            />
          )}
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {/* <Grid item xs={12} md={8} lg={9}> */}
            {/* Setting */}
            {this.state.page === "-1" && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Setting
                      emp={this.state.emp}
                      page={this.state.page}
                      parentCallback={this.callbackFunction}
                    />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* Home */}
            {this.state.page === "0" && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Home
                      page={this.state.page}
                      parentCallback={this.callbackFunction}
                    />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* Machine Information*/}
            {this.state.page === "1" && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={classes.paper}>
                    <Power data={this.state.data} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={classes.paper}>
                    <Slider />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={classes.paper}>
                    <Out data={this.state.data} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={classes.paper}>
                    <PV data={this.state.data} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Paper className={classes.paper}>
                    <SV data={this.state.data} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Paper className={classes.paper}>
                    <AlarmBit data={this.state.data} />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* PV Graph Chart */}
            {this.state.page === "2" && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <PVChart chart={this.state.chart} />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* Employees */}
            {this.state.page === "3" && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Employee emps={this.state.emps} />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* Recent Alarms */}
            {this.state.page === "4" && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Alarm alarm={this.state.alarm} />
                  </Paper>
                </Grid>
              </Grid>
            )}
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
