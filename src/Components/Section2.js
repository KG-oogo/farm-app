import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 50,
    background: "#F8F8F8",
  },
}));

export default function Section2() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3">
          Source securely from any country in Africa, in seconds!
        </Typography>
        <Typography variant="h6">
          Import food & agricultural produce from Africa with confidence;
          shipped by cooperatives, farmer groups, exporters and agro-processors
          that work directly with trusted family farmers.
        </Typography>
      </Grid>
    </Grid>
  );
}
