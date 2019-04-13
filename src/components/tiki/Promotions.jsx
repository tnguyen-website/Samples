import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core';
import FullWidthImage from '../shared/FullWidthImage';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }
});

const renderTitles = classes => {
  let eles = [];
  for (let i = 0; i < 3; i++) {
    eles.push(
      <GridListTile cols={1} key={i} className={classes.img}>
        <FullWidthImage
          src="https://salt.tikicdn.com/ts/banner/7b/5d/0a/d1ad9f6262e6b78655bc6be505d70833.png"
          alt="https://salt.tikicdn.com/ts/banner/7b/5d/0a/d1ad9f6262e6b78655bc6be505d70833.png"
        />
      </GridListTile>
    );
  }

  return eles;
};

const Promotions = ({ classes }) => {
  return (
    <div className={classes.root}>
      <GridList cols={3} spacing={0}>
        <GridListTile
          cols={3}
          rows={2}
          key="https://salt.tikicdn.com/ts/banner/35/a2/22/646708a572b0ab8801fe16cf3a4d5e80.jpg"
          className={classes.img}
        >
          <FullWidthImage
            src="https://salt.tikicdn.com/ts/banner/35/a2/22/646708a572b0ab8801fe16cf3a4d5e80.jpg"
            alt="Carousel"
          />
        </GridListTile>
        {renderTitles(classes)}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(Promotions);
