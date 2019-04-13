import React from 'react';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Center } from '../components/shared/jssUtils';
import Navigator from '../components/global/Navigator';
import {
  GeneralInformation,
  Experience,
  Introdution,
  Title
} from '../components/about';
import { withWidth } from '@material-ui/core';

const styles = {
  center: {
    ...Center()
  },
  section: {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',

    '&:first-child': {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};

const About = ({ classes, width }) => {
  return (
    <React.Fragment>
      <Navigator />
      <div style={{ marginTop: '64px' }}>
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            component="section"
            xs={12}
            className={classNames(classes.center, classes.section)}
            style={{ backgroundColor: /*'#1D6B87'*/ 'transparent' }}
          >
            <Title />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
            className={classNames(classes.center, classes.section)}
            style={{ backgroundColor: '#f0f7f7' }}
          >
            <Introdution width={width} />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
            className={classNames(classes.center, classes.section)}
            style={{ backgroundColor: '#dfeeee' }}
          >
            <GeneralInformation width={width} />
          </Grid>
          {/* <Grid
            item
            component="section"
            xs={12}
            className={classNames(classes.center, classes.section)}
            style={{ backgroundColor: '#F0F7F7' }}
          >
            <Experience />
          </Grid> */}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default compose(
  withWidth(),
  withStyles(styles)
)(About);
