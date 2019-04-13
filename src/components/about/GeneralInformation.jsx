import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Avatar from './Avatar';

const styles = theme => ({
  information: {
    marginLeft: '1em',
    maxWidth: '30em',
    [theme.breakpoints.up('md')]: {
      marginLeft: '5em'
    }
  },
  link: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all'
  }
});

const GeneralInformation = ({ classes, width }) => {
  const isOnSmallViewport = !isWidthUp('md', width);

  return (
    <Grid
      item
      container
      xs={12}
      justify={isOnSmallViewport ? 'flex-start' : 'center'}
      alignItems="center"
      wrap="nowrap"
    >
      <Hidden only={['xs', 'sm']}>
        <Avatar />
      </Hidden>
      <div className={classes.information}>
        <Typography
          variant={isOnSmallViewport ? 'h5' : 'h6'}
          color="inherit"
          gutterBottom
        >
          General Information
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon className="fas fa-user-tie" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" color="inherit">
                  Tan, Ha Nguyen
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fas fa-briefcase" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" color="inherit">
                  Senior Web Developer
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fas fa-envelope-open" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  href="mailto:tannguyen24894@gmail.com"
                  className={classes.link}
                >
                  tannguyen24894@gmail.com
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fab fa-linkedin" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  href="https://www.linkedin.com/in/tan-nguyen248"
                  className={classes.link}
                >
                  https://www.linkedin.com/in/tan-nguyen248
                </Link>
              }
            />
          </ListItem>
        </List>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(GeneralInformation);
