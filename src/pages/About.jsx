import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Center } from '../components/shared/jssUtils';
import {
  GeneralInformation,
  Experience,
  Introdution
} from '../components/about';

const styles = {
  center: {
    ...Center()
  },
  section: {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    '&::before': {
      content: '',
      zIndex: 1,
      position: 'absolute',
      height: '30px',
      width: '30px',
      transform: 'rotate(45deg)',
      backgroundColor: 'inherit',
      marginTop: '-15px',
      marginLeft: '-15px',
      top: '100%',
      left: '50%',
      borderLeftWidth: 0,
      borderTopWidth: 0
    }
  }
};

const About = ({ classes }) => {
  return (
    <div style={{ marginTop: '64px' }}>
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          component="section"
          xs={12}
          className={classNames(classes.center, classes.section)}
          style={{ backgroundColor: '#F0F7F7' }}
        >
          <Introdution />
        </Grid>
        <Grid
          item
          component="section"
          xs={12}
          className={classNames(classes.center, classes.section)}
          style={{ backgroundColor: '#dfeeee' }}
        >
          <GeneralInformation />
        </Grid>
        <Grid
          item
          component="section"
          xs={12}
          className={classNames(classes.center, classes.section)}
          style={{ backgroundColor: '#F0F7F7' }}
        >
          <Experience />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
