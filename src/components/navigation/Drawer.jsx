import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Brand from '../global/Brand';

const styles = theme => ({
  drawer: {
    minWidth: '250px'
  },
  drawerLabelContainer: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    paddingBottom: '20px',
    paddingTop: '20px',
    justifyContent: 'center',
    '& .text': {
      paddingLeft: 0,
      flexGrow: 0
    }
  },
  drawerIcon: {
    color: 'inherit'
  }
});

const NavigationDrawer = ({
  isOpened,
  handleClick,
  classes,
  selectedIndex
}) => {
  return (
    <Drawer open={isOpened} onClose={handleClick}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleClick}
        onKeyDown={handleClick}
        className={classes.drawer}
      >
        <List disablePadding>
          <ListItem button className={classes.drawerLabelContainer}>
            <ListItemText primary={<Brand />} className="text" />
          </ListItem>
          <Divider />
          {[
            { text: 'About', icon: 'address-card' },
            { text: 'Samples', icon: 'th-list' }
          ].map((item, index) => (
            <ListItem
              button
              key={item.text}
              divider
              selected={selectedIndex === index}
              component="a"
              href={`/${item.text.toLowerCase()}`}
            >
              <ListItemIcon>
                <Icon component={FontAwesomeIcon} icon={item.icon} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="inherit">
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(NavigationDrawer);
