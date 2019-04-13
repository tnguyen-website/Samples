import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid>
          <Link href="#" color="inherit" underline="none">
            Trợ lí Tiki
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
