import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const style = {
  title: {
    color: '#fafafa'
  }
};

const Title = ({ classes }) => {
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        I know WEB. In fact, I sleep with it.
      </Typography>
    </div>
  );
};

export default withStyles(style)(Title);
