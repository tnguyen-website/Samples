import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Menu = ({ data }) => {
  const routes = data ? data.filter(x => x.name !== 'Home') : [];
  return (
    <Grid item container xs={4} sm={8} justify="flex-end">
      {routes.map(x => (
        <Button key={x.name} color="inherit" component="a" href={x.url}>
          <Typography variant="h6" color="inherit">
            {x.name}
          </Typography>
        </Button>
      ))}
    </Grid>
  );
};

export default Menu;
