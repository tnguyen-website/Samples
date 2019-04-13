import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar';
import BackgroundImage from '../../assets/header-bg.jpg';
import Parallax from '../../components/shared/Parallax';

const style = {
  title: {
    color: '#fafafa',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1em',
    textAlign: 'center',
    width: '100%'
  },
  titleContainer: {
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

class Title extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Parallax
        component={Grid}
        container
        justify="center"
        alignItems="center"
        direction="column"
        backgroundImage={BackgroundImage}
      >
        <div>
          <Hidden only={['md', 'lg', 'xl']}>
            <Avatar />
          </Hidden>
          <div className={classes.titleContainer}>
            <Typography variant="h3" className={classes.title}>
              TAN NGUYEN
            </Typography>
            <Typography variant="h5" className={classes.title}>
              I create WEB. In fact, I sleep with it.
            </Typography>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default withStyles(style)(Title);
