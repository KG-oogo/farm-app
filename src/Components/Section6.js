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
    paddingLeft: 50,
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

const ranking = [
  {
    sectionName: "Regions",
    data: [
      "North Africa",
      "Eastern Africa",
      "Middle Africa",
      "Southern Africa",
      "Western Africa",
      "All Africa",
    ],
  },
  {
    sectionName: "Top Countries",
    data: [
      "South Africa",
      "Morocco",
      "Egypt",
      "Ethopia",
      "Ghana",
      "Ivory Coast",
    ],
  },
  {
    sectionName: "Trending Products",
    data: [
      "Macadimia",
      "Cashew Nuts",
      "Black Cumin",
      "Sesame",
      "Cocoa",
      "Pineapple",
    ],
  },
  {
    sectionName: "Top Categories",
    data: [
      "Herbs and Spices",
      "Grains, Cereals and Legumes",
      "Processed and Agro commodities",
      "Friuts and Vegetables",
      "Fish and Seafood",
      "Nuts and Oilseeds",
    ],
  },
];

export default function Section6() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {ranking.map((rank) => (
        <Grid item xs={3} style={{ justifyContent: "flex-start" }}>
          <Typography variant="h5" align="left">
            {rank.sectionName}
          </Typography>
          {rank.data.map((item) => (
            <Typography variant="body1" align="left">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
