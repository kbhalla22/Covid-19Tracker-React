import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.modules.css";
//pass props to card(acc to app.js)
const Cards = (props) => {
  console.log(props);
  return (
    /**
     * this div acts as a container
     * Grid acts like a container for all the cards.
     * Then add another grid(item)
     * Typography is basically used for styling
     * Gutters are spaces in css grids
     * gutterBottom provides padding on the bottom.
     */
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant="body2" >Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant="body2" >Number of recoveries COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color="textSecondary" >REAL DATE</Typography>
            <Typography variant="body2" >Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
