import React from 'react';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';

const styles = {
  icon: {
    width: '1.3em',
    textAlign: 'right'
  },
  text: {
    paddingLeft: 0
  },
  listItem: {
    paddingTop: '7px',
    paddingBottom: '7px'
  }
};

const CategoryItem = ({ classes, icon, name }) => {
  return (
    <ListItem button className={classes.listItem}>
      <ListItemIcon>
        <Icon fontSize="inherit" className={classNames(icon, classes.icon)} />
      </ListItemIcon>
      <ListItemText
        className={classes.text}
        primary={<Typography variant="caption">{name}</Typography>}
      />
    </ListItem>
  );
};

export default withStyles(styles)(CategoryItem);
