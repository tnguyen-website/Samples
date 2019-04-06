import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import TabLink from './TabLink';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  icons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

class Navigator extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Tân Nguyễn
          </Typography>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={this.handleChange}
            className={classes.grow}
          >
            <TabLink label="About" href="page1" />
          </Tabs>
          <div
            className={classNames(classes.grow, classes.icons)}
            justify="flex-end"
          >
            <IconButton color="inherit">
              <Icon
                className="fab fa-linkedin"
                color="inherit"
                fontSize="small"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
