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

import backgroundImage from "../MacNutTree.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  logo: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
    opacity: 1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexGrow: 1,
    minHeight: 900,
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
  button: {
    padding: 5,
    margin: 5,
  },
}));

export default function Section1() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paperContainer}>
        <Grid item xs={12}>
          <AppBar position="static" style={{ opacity: 0.8, boxShadow: "none" }}>
            <Toolbar>
              <Box flexGrow={1}></Box>
              <Box flexGrow={1}>
                <Avatar
                  alt="Kone"
                  src="/static/images/avatar/1.jpg"
                  className={classes.logo}
                />
              </Box>

              <Box>
                <Button color="inherit" style={{ textTransform: "none" }}>
                  Login / Register
                </Button>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} className={classes.grids}>
          <Typography variant="h4">All Africa’s Produce.</Typography>
          <Typography variant="h4"> One Platform.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Sell Your Produce
          </Button>
          <Button
            color={classes.button.color}
            variant="contained"
            className={classes.button}
          >
            I Want To Buy
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
