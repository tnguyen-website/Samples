import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabLink from './TabLink';
import PublicContact from './PublicContact';

const styles = (theme) => ({
  navigator: {
    minHeight: '64px'
  },
  icons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
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

class Navigator extends React.Component {
  state = {
    value: 0,
    isDrawerOpened: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDrawerClick = () => {
    this.setState((prevState) => ({
      isDrawerOpened: !prevState.isDrawerOpened
    }));
  };

  renderLabel = () => {
    return (
      <Typography variant="h6" color="inherit">
        Tân Nguyễn
      </Typography>
    )
  };

  renderDrawer = (selectedIndex, classes) => {
    return (
      <Drawer open={this.state.isDrawerOpened} onClose={this.handleDrawerClick} >
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleDrawerClick}
          onKeyDown={this.handleDrawerClick}
          className={classes.drawer}
        >
          <ListItem button className={classes.drawerLabelContainer}>
            <ListItemIcon className={classes.drawerIcon}><Icon component={FontAwesomeIcon} icon='code-branch' /></ListItemIcon>
            <ListItemText primary={this.renderLabel()} className='text' />
          </ListItem>
          <Divider />
          {[{ text: 'About', icon: 'address-card'},{text: 'Samples', icon: 'th-list'}].map((item, index) => (
            <ListItem button key={item.text} divider selected={selectedIndex === index}>
              <ListItemIcon><Icon component={FontAwesomeIcon} icon={item.icon} /></ListItemIcon>
              <ListItemText primary={
                  <Typography variant="body2" color="inherit">
                    {item.text}
                  </Typography>
              } />
            </ListItem>
          ))}
        </div>
      </Drawer>
    );
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        {this.renderDrawer(0, classes)}
        <AppBar>
          <Grid component={Toolbar} container justify='space-between' className={classes.navigator} wrap='nowrap'>
            <Hidden smUp>
              <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerClick}
                >
                  <Icon component={FontAwesomeIcon} icon='bars' />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {this.renderLabel()}
            </Hidden>
            <Grid item container xs={8} justify='flex-end'>
              <Hidden smDown>
                <Grid item container xs={4} sm={8} justify='flex-end'> 
                  <Tabs
                    value={value}
                    onChange={this.handleChange}
                  >
                  {['About', 'Samples'].map(x => <TabLink
                      key={x}
                      label={
                        <Typography variant="h6" color="inherit">
                          {x}
                        </Typography>
                      }
                      href="page1"
                    />)}
                    
                  </Tabs>
                </Grid>
              </Hidden>
              <PublicContact item xs={8} sm={4} md={2} xl={1} />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
