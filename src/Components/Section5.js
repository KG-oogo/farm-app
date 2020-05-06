import React from "react";

import Grid from "@material-ui/core/Grid";

/////////////////////// AppBar
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardRoot: {
    maxWidth: 345,
    maxHeight: 345,
    padding: 10,
  },
  grids: {
    padding: 40,
  },
  gridTwo: {
    background: "#F8F8F8",
  },
}));

const insights = [
  {
    buttonName: "Market Insights",
    data: "",
  },
  {
    buttonName: "Export Insights",
    data: "",
  },
  {
    buttonName: "Price Insights",
    data: "",
  },
];

export default function Section5() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3">Kone Insights</Typography>
      </Grid>
      <Typography variant="h5">
        Africa's most comprehansive AI-powered tool that analyzes big data and
        generates valuable insights on food and agriculture
      </Typography>

      {insights.map((insight) => (
        <Grid item xs={4} style={{ padding: 10 }}>
          <Button>{insight.buttonName}</Button>
        </Grid>
      ))}
    </Grid>
  );
}
