import React from "react";
import { ListItem, styled } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from "@material-ui/icons/Edit";
import LayersIcon from "@material-ui/icons/Layers";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";
import HistoryIcon from "@material-ui/icons/History";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";

const StyledListItem = styled(ListItem)({
  backgroundColor: "#343a40"
});

export const mainListItems = (
  <div>
    <ListItem button onClick={() => console.log("p")}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Chart" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Employee" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const sensorListItems = (
  <div>
    <StyledListItem>
      <ListItemText
        primaryTypographyProps={{ style: { color: "white" } }}
        primary="Current SV"
        align="center"
      />
    </StyledListItem>
    <Divider />
    <ListItem>
      <ListItemIcon>
        <TemperatureIcon />
      </ListItemIcon>
      <ListItemText primary="Temperature" />
      <ListItemText secondary="100 C" align="right" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <HumidityIcon />
      </ListItemIcon>
      <ListItemText primary="Humidity" />
      <ListItemText secondary="50%" align="right" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <PressureIcon />
      </ListItemIcon>
      <ListItemText primary="Pressure" />
      <ListItemText secondary="1 Pa" align="right" />
    </ListItem>
    <div align="center">
      <Button
        size="small"
        variant="contained"
        color="default"
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
    </div>
  </div>
);
