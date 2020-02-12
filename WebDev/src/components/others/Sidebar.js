import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import TemperatureIcon from "@material-ui/icons/AcUnit";
import HumidityIcon from "@material-ui/icons/Opacity";
import PressureIcon from "@material-ui/icons/Cloud";

export const mainListItems = (
  <div>
    <ListItem button onClick={() => console.log("p")}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
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
  </div>
);
