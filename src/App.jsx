import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { addFont } from './fontAwesome';
import Router from './routes';
import Navigator from './components/global/Navigator';
import { Samples } from './pages';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    shadows: []
  }
});

theme.breakpoints.values = {
  xs: 0,
  sm: 564,
  md: 768,
  lg: 948,
  xl: 1020
};

const styles = {
  main: {
    marginTop: '64px'
  }
};

addFont();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Helmet>
            <title>Tan Nguyen - Some my websites</title>
          </Helmet>
          <Navigator />
          <main className={classes.main}>
            <Samples />
          </main>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
