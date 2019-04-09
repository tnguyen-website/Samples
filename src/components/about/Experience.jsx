import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = {
  papper: {
    width: '70%',
    height: '25rem'
  },
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    backgroundColor: 'transparent'
  },
  tabs: {
    width: '20%'
  },
  image: {
    width: '350px',
    paddingTop: '2em',
    '& img': {
      maxHeight: '300px',
      maxWidth: '300px'
    }
  },
  introductionText: {
    padding: '2em'
  }
};

class Experience extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderContent = (classes, img, text) => (
    <Paper className={classes.papper}>
      <Grid container justify="space-between" wrap="nowrap">
        <span className={classes.image}>
          <img alt="describe" src={img} />
        </span>
        <Typography variant="body1" className={classes.introductionText}>
          {text}
        </Typography>
      </Grid>
    </Paper>
  );

  text = [
    `I will create for you the best websites
       which are beautiful and smooth on all of smartphones, tablets
       and desktops. I focus on code qualities and code conventions
       which means that you’ll always have the ability to maintain and
       edit it easily once I’ve built your sites.`,
    `Success, Innovation and Integrity are my key factor to help you
       on the road to success. I will create for you the best websites
       which are beautiful and smooth on all of smartphones, tablets
       and desktops. I focus on code qualities and code conventions
       which means that you’ll always have the ability to maintain and
       edit it easily once I’ve built your sites.`,
    `Success, Innovation and Integrity are my key factor to help you
       on the road to success. I will create for you the best websites
       which are beautiful and smooth on all of smartphones, tablets
       and desktops. I focus on code qualities and code conventions
       which means that you’ll always have the ability to maintain and
       edit it easily once I’ve built your sites.`
  ];

  images = [
    'https://i.imgur.com/YQRcWjG.png',
    'https://i.imgur.com/RKvxR6a.png',
    'https://i.imgur.com/RKvxR6a.png'
  ];

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    return (
      <Grid item container justify="space-around" wrap="nowrap" xs={6}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator
          }}
          className={classes.tabs}
        >
          <Tab label="Graduated" />
          <Tab label="BI Project" />
          <Tab label="Advertisement Project" />
        </Tabs>
        {this.renderContent(classes, this.images[value], this.text[value])}
      </Grid>
    );
  }
}

export default withStyles(styles)(Experience);
