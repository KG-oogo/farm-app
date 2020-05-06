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
    background: "#F8F8F8",
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
    maxWidth: 550,
    maxHeight: 345,
    margin: 10,
  },
}));

const howItWorks = [
  {
    key: 1,
    icon: <CloudUploadIcon style={{ fontSize: 80 }} />,
    heading: "Inventory Is Uploaded",
    description:
      "Quality produce is uploaded by Africa’s cooperatives, farmers groups, exporters, agro-processors and other organizations that work directly with smallholder farmers, pastoralists and fishing communities.",
  },
  {
    key: 2,
    icon: <SearchIcon style={{ fontSize: 80 }} />,
    heading: "Buyer Selects Produce",
    description:
      "Buyers from any part of the world are able to access produce from all across Africa, including prices, shipping rates, and logistics information in one place. The buyer securely places an order.",
  },
  {
    key: 3,
    icon: <LocalShippingIcon style={{ fontSize: 80 }} />,
    heading: "Produce Is Shipped",
    description:
      "The producer ships the produce to the buyer, by air or by sea freight to any of the market destinations in the world. The payment is released to the producer after meeting all conditions.",
  },
];

export default function Section4() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3">How It Works</Typography>
      </Grid>

      {howItWorks.map((stage) => (
        <Grid item xs={4} key={stage.key} className={classes.cardRoot}>
          <Card>
            <Typography variant="h3">
              {stage.key}. {stage.icon}
            </Typography>

            <Typography variant="h6" color="textSecondary" gutterBottom>
              {stage.heading}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {stage.description}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
