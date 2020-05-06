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

import CopyrightIcon from "@material-ui/icons/Copyright";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
    background: "black",
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

const footer = [
  {
    name: "",
    data: [
      "Help Center",
      "order Status",
      "FAQs",
      "Payment Terms",
      "Shipping",
      "Refund policy",
      "Support",
      "Contact Us",
    ],
  },
  {
    name: "Coporate",
    data: [
      "About Us",
      "Terms of Use",
      "Press Center",
      "Careeres",
      "Programs",
      "Accessibility Statement",
    ],
  },
  {
    name: "Legal",
    data: [
      "Privacy Statement",
      "Ad and Cookie Pilicy",
      "Testimonial Disclaimer",
      "Social Responsibility",
      "Envoronmental Responsibility",
    ],
  },
  {
    name: "Useful Links",
    data: [
      "All Produce",
      "Producer Sign Up",
      "Blog",
      "Insights",
      "Farmers",
      "Partners",
      "Coronavirus Agriculture Impact",
      "Home",
    ],
  },
  {
    name: "About Kone",
    data: [
      "Kone is a platform for food & agricultural produce from Africa's cooperatives, farmers groups, agro-processors and other organizations that work directly with family farmers.",
      "Kone, South Africa",
      "P.O. Box 345 Midrand South Africa",
    ],
  },
];

export default function Section7() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {footer.map((item) => (
        <Grid item xs={2}>
          <Typography variant="h5" align="left" color="secondary">
            {item.name}
          </Typography>
          {item.data.map((item) => (
            <Typography variant="body1" align="left" color="secondary">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}

      <Grid item xs={12}></Grid>
      <Typography variant="body1" align="left" color="secondary">
        <CopyrightIcon /> 2020 Kone. All rights reserved
      </Typography>
    </Grid>
  );
}
