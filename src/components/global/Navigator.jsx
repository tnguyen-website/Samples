import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import PublicContact from './PublicContact';
import Brand from './Brand';
import NavigationDrawer from '../navigation/Drawer';
import NavigationMenu from '../navigation/Menu';
import NavigationBurgerButton from '../navigation/BurgerButton';

const styles = {
  navigator: {
    minHeight: '64px'
  }
};

class Navigator extends React.Component {
  state = {
    value: 0,
    isDrawerOpened: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDrawerClick = () => {
    this.setState(prevState => ({
      isDrawerOpened: !prevState.isDrawerOpened
    }));
  };

  render() {
    const { classes } = this.props;
    const { value, isDrawerOpened } = this.state;

    return (
      <div>
        <NavigationDrawer
          isOpened={isDrawerOpened}
          handleClick={this.handleDrawerClick}
        />
        <AppBar>
          <Grid
            component={Toolbar}
            container
            justify="space-between"
            className={classes.navigator}
            wrap="nowrap"
          >
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <NavigationBurgerButton handleClick={this.handleDrawerClick} />
            </Hidden>
            <Hidden only={['xs']}>
              <Brand />
            </Hidden>
            <Grid item container xs={8} justify="flex-end">
              <Hidden only={['xs']}>
                <NavigationMenu
                  value={value}
                  handleChange={this.handleChange}
                />
              </Hidden>
              <PublicContact item xs={6} sm={4} md={2} xl={1} />
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
