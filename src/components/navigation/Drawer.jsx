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
  selectedIndex,
  home,
  pages
}) => {
  return (
    <Drawer open={isOpened} onClose={handleClick}>
      <div tabIndex={0} role="button" className={classes.drawer}>
        <List disablePadding>
          <ListItem button className={classes.drawerLabelContainer}>
            <ListItemText primary={<Brand url={home.url} />} className="text" />
          </ListItem>
          <Divider />
          {pages.map((item, index) => (
            <ListItem
              button
              key={item.name}
              divider
              selected={selectedIndex === index}
              component="a"
              href={item.url}
            >
              <ListItemIcon>
                <Icon component={FontAwesomeIcon} icon={item.icon} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="inherit">
                    {item.name}
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
