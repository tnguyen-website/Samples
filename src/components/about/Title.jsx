import React from 'react';
import { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar';
import BackgroundImage from '../../assets/header-bg.jpg';
import Parallax from '../../components/shared/Parallax';
import PublicContact from '../global/PublicContact';

const style = {
  title: {
    color: '#fafafa',
    padding: '1rem',
    textAlign: 'center',
    maxWidth: '100%'
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
    const { classes, width } = this.props;
    const isOnSmallViewport = !isWidthUp('md', width);

    return (
      <Parallax
        component={Grid}
        container
        justify="center"
        alignItems="center"
        direction="column"
        backgroundImage={BackgroundImage}
      >
          <div className={classes.titleContainer}>
            <Hidden only={['md', 'lg', 'xl']}>
              <Avatar />
            </Hidden>
            <Typography variant="h3" className={classes.title}>
              TAN NGUYEN
            </Typography>
            <Typography variant="h5" className={classes.title} noWrap={false}>
              I create WEB. {isOnSmallViewport && <br />} In fact, I sleep with it.
            </Typography>
            <PublicContact />
          </div>
      </Parallax>
    );
  }
}

export default withStyles(style)(Title);
