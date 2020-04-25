import React, { Component } from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Title from "../others/Title";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class PVChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: "",
    };
    this.sendData = this.sendData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  sendData(nextpage) {
    this.props.parentCallback(nextpage);
  }

  handleClick() {
    console.log("click");
    if (this.props.chart !== null) {
      let array = this.props.chart.map((obj) => Object.values(obj));
      this.setState({
        chart: array,
      });
      console.log(this.state.chart);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Title>PV Chart</Title>
        <div ></div>
        <button onClick={this.handleClick}>Click me!</button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PVChart);
