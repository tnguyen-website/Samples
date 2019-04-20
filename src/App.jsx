import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Router from './routes';
import { addFont } from './fontAwesome';

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

addFont();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            />
            <title>About Tan Nguyen</title>
          </Helmet>
          <Router />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
