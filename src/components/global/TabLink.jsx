import React from 'react';
import Tab from '@material-ui/core/Tab';

const TabLink = props => {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
};

export default TabLink;
