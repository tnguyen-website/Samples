import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

const styles = {
  avatar: {
    margin: 10,
    width: '15em',
    height: 'auto'
  },
  information: {
    marginLeft: '7em',
    padding: '1rem',
    maxWidth: '30em'
  }
};

const GeneralInformation = ({ classes }) => {
  return (
    <Grid
      item
      container
      xs={8}
      spacing={40}
      justify="center"
      alignItems="flex-start"
      wrap="nowrap"
    >
      <Avatar
        alt="Tan Nguyen"
        src="https://lh3.googleusercontent.com/-TNZqe6Iz_w8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reUwWC0N-aavQtwJrUBEERm2lUVbA/s32-c-mo/photo.jpg"
        className={classes.avatar}
      />
      <div className={classes.information}>
        <Typography variant="h6" color="inherit" gutterBottom>
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
                <Link href="mailto:tannguyen24894@gmail.com">
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
                <Link href="https://www.linkedin.com/in/tan-nguyen248">
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
