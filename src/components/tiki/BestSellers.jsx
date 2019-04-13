import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FullWidthImage from '../shared/FullWidthImage';
import BestSellersData from '../../data/tiki/bestsellers.json';

const BestSellers = () => {
  console.log(BestSellersData);
  return (
    <GridList cols={4}>
      {BestSellersData &&
        BestSellersData.items &&
        BestSellersData.items.map(x => (
          <GridListTile key={x.imgSrc}>
            <FullWidthImage src={x.imgSrc} alt={x.alt} />
          </GridListTile>
        ))}
    </GridList>
  );
};

export default BestSellers;
