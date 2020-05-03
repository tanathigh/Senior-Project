import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import Title from "../others/Title";
import SimpleImageSlider from "react-simple-image-slider";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Slider extends Component {
  render() {
    const images = [
      {
        url: "/images/slider/machine1.png",
      },
      {
        url: "/images/slider/machine2.png",
      },
      {
        url: "/images/slider/machine3.png",
      },
      {
        url: "/images/slider/machine4.png",
      },
    ];
    return (
      <React.Fragment>
        <Title>PHOTO SLIDER</Title>
        <ListItem>
          <div>
            <SimpleImageSlider width={480} height={300} images={images} />
          </div>
        </ListItem>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Slider);
