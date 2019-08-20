import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ text, onClick, type }) => (
  <Button
    variant="contained"
    type={type}
    onClick={onClick}
  >
    {text}
  </Button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
}

export default CustomButton;
