import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import TabLink from '../global/TabLink';

const Menu = ({ value, handleChange }) => {
  return (
    <Grid item container xs={4} sm={8} justify="flex-end">
      <Tabs value={value} onChange={handleChange}>
        {['About', 'Samples'].map(text => (
          <TabLink
            key={text}
            label={
              <Typography variant="h6" color="inherit">
                {text}
              </Typography>
            }
            href={`/${text.toLowerCase()}`}
          />
        ))}
      </Tabs>
    </Grid>
  );
};

export default Menu;
