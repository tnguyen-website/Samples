import React from 'react';
import {
  TopBar,
  Navigation,
  Categories,
  Promotions,
  BestSellers
} from '../components/tiki';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  },
  app: {
    width: '1024px'
  }
};

const Tiki = ({ classes }) => {
  return (
    <div className={classes.container}>
      {/* <TopBar />
      <Navigation /> */}
      <Grid container justify="center" wrap="nowrap" className={classes.app}>
        <Grid item container alignItems="stretch" xs={12}>
          <Grid item xs={3}>
            <Categories />
          </Grid>
          <Grid item xs={8}>
            <Promotions />
          </Grid>
          <Grid item xs={12}>
            <BestSellers />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Tiki);
