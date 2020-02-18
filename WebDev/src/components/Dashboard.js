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
import { default as SubItems } from "./others/SubSideBar";
import { default as MainItems } from "./others/MainSideBar";
import Chart from "./dashboard/HistoryChart";
import EditSV from "./dashboard/EditSV";
import Alarm from "./dashboard/Alarm";
import Home from "./dashboard/Home";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Contract Line @"}
      <Link color="inherit" href="https://material-ui.com/">
        Tanat Hophaisarn
      </Link>
    </Typography>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});

class Dashboard extends Component {
  state = { sensors: "", page: "0" };

  callbackFunction = childData => {
    this.setState({ page: childData });
    console.log(this.state.page);
  };

  constructor(props) {
    super(props);
    this.fixedHeightPaper = clsx(this.props.paper, this.props.fixedHeight);
    console.log(this.state.page);
  }
  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper)
          }}
        >
          <Divider />
          {this.state.page > 0 ? (
            <SubItems
              page={this.state.page}
              parentCallback={this.callbackFunction}
            />
          ) : (
            <MainItems
              page={this.state.page}
              parentCallback={this.callbackFunction}
            />
          )}
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} md={8} lg={9}> */}
              {/* EditSV */}
              {this.state.page === "1" && (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <EditSV />
                  </Paper>
                </Grid>
              )}
              {/* History Chart */}
              {this.state.page === "2" && (
                <Grid item xs={12}>
                  <Paper className={this.fixedHeightPaper}>
                    <Chart />
                  </Paper>
                </Grid>
              )}
              {/* Home */}
              {this.state.page === "0" && (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Home />
                  </Paper>
                </Grid>
              )}
              {/* Recent Alarms */}
              {this.state.page === "-1" && (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Alarm />
                  </Paper>
                </Grid>
              )}
            </Grid>
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
