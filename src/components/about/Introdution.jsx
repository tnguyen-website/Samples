import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  introdution: {
    maxWidth: '30em'
  }
};

const Introdution = ({ classes }) => {
  return (
    <Typography variant="body1" color="inherit" className={classes.introdution}>
      Success, Innovation and Integrity are my key factor to help you on the
      road to success. I will create for you the best websites which are
      beautiful and smooth on all of smartphones, tablets and desktops. I focus
      on code qualities and code conventions which means that you’ll always have
      the ability to maintain and edit it easily once I’ve built your sites.
    </Typography>
  );
};

export default withStyles(styles)(Introdution);
