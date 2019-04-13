import React from 'react';
import List from '@material-ui/core/List';
import ProductCategories from '../../data/tiki/categories.json';
import CategoryItem from './CategoryItem';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    border: '1px solid #e1e1e1',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
};

const Categories = ({ classes }) => {
  return (
    <div className={classes.container}>
      <List disablePadding={true}>
        {ProductCategories &&
          ProductCategories.items.map(x => (
            <CategoryItem key={x.name} {...x} />
          ))}
      </List>
    </div>
  );
};

export default withStyles(styles)(Categories);
