import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  img: {
    maxWidth: '100%'
  }
};

const FullWidthImage = ({ src, alt, classes }) => {
  return <img src={src} alt={alt} className={classes.img} />;
};

export default withStyles(styles)(FullWidthImage);
