import React from 'react';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  link: {
    color: theme.palette.common.white
  },
  icon: {
    marginRight: '10px'
  }
});

const Brand = ({ classes, url }) => {
  return (
    <Link underline="none" href={url} color="inherit" className={classes.link}>
      <Icon
        component={FontAwesomeIcon}
        icon="code-branch"
        className={classes.icon}
      />
      <Typography inline variant="h6" color="inherit">
        Tân Nguyễn
      </Typography>
    </Link>
  );
};

export default withStyles(styles)(Brand);
