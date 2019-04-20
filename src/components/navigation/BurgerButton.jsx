import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BurgerButton = ({ handleClick }) => {
  return (
    <IconButton color="inherit" aria-label="Open drawer" onClick={handleClick}>
      <Icon component={FontAwesomeIcon} icon="bars" />
    </IconButton>
  );
};

export default BurgerButton;
