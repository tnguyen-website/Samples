import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  introdution: {
    maxWidth: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',

    [theme.breakpoints.up('md')]: {
      maxWidth: '30em'
    }
  }
});

const Introdution = ({ classes, width }) => {
  const isOnSmallViewport = !isWidthUp('md', width);

  return (
    <Grid
      item
      container
      xs={12}
      md={8}
      justify={isOnSmallViewport ? 'flex-start' : 'center'}
      alignItems="center"
      wrap="nowrap"
    >
      <Typography
        variant="body1"
        color="inherit"
        className={classes.introdution}
      >
        Success, Innovation and Integrity are my key factor to help you on the
        road to success. I will create for you the best websites which are
        beautiful and smooth on all of smartphones, tablets and desktops. I
        focus on code qualities and code conventions which means that you’ll
        always have the ability to maintain and edit it easily once I’ve built
        your sites.
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Introdution);
