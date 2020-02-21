import React, { Component } from "react";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const styles = {
  button: {
    width: 40,
    height: 40,
    padding: 0
  },
  icon: {
    fontSize: 10,
    color: "#fffff"
  },
  tooltip: {
    marginLeft: 3,
    marginRight: 3
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick = event => this.setState({ anchorEl: event.currentTarget });
  handleClose = () => this.setState({ anchorEl: null });

  tick() {
    //this.state = {date: new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="." className="navbar-brand">
          <img src="/images/logo/logo.png" width="30" height="30" alt="" />
          &nbsp; Climate Control System
        </a>
        <div className="row">
          <span className="navbar-text">
            {this.state.date.toLocaleString()}
          </span>
        </div>

        <div className="row">
          <IconButton
            style={styles.button}
            iconStyle={styles.icon}
            tooltipStyles={styles.tooltip}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Edit Profile</MenuItem>
            <MenuItem
              onClick={this.handleClose}
              component={Link}
              to={"/signin"}
            >
              Logout
            </MenuItem>
          </Menu>
          &nbsp;&nbsp;
        </div>
      </nav>
    );
  }
}

export default Header;
