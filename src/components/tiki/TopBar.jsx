import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const TopBar = () => {
  return (
    <Grid
      container
      justiy="center"
      style={{
        backgroundImage:
          'linear-gradient(to right, #1b9aff 40%, #1b9aff 50%, #1b9aff 60%)'
      }}
    >
      <Link href="#">
        <div
          style={{
            height: '50px',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'auto 50px',
            backgroundImage:
              'url("https://salt.tikicdn.com/ts/banner/df/79/ec/cf1fbc4a8f7fa6a1903dc7ca61601a29.png")'
          }}
        />
      </Link>
    </Grid>
  );
};

export default TopBar;
