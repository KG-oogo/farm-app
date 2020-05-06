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
}));

const produceCatagories = [
  {
    key: 0,
    name: "Grains and Pulses",
    picture: "./MacNutTree.jpg",
  },
  {
    key: 1,
    name: "Fruits and Vegetables",
    picture: "./MacNutTree.jpg",
  },
  {
    key: 2,
    name: "Agro Commodities",
    picture: "./MacNutTree.jpg",
  },
  {
    key: 3,
    name: "Meat and Livestock",
    picture: "./MacNutTree.jpg",
  },
  {
    key: 4,
    name: "Herbs and Spices",
    picture: "./MacNutTree.jpg",
  },
  {
    key: 5,
    name: "Flowers",
    picture: "./MacNutTree.jpg",
  },
];

export default function Section3() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3">Popular produce categories</Typography>
      </Grid>

      {produceCatagories.map((produce) => (
        <Grid item xs={2} key={produce.key} className={classes.cardRoot}>
          <Card>
            <CardActions style={{ justifyContent: "center" }}>
              <Button size="small" fullWidth={1}>
                {produce.name}
              </Button>
            </CardActions>
            <CardMedia
              className={classes.media}
              image={produce.picture}
              title={produce.name}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
