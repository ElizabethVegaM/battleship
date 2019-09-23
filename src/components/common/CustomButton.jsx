/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  text, onClick, type, btnClass, btnValue,
}) => (
  <button
    value={btnValue}
    variant="contained"
    type={type}
    onClick={onClick}
    className={btnClass}
  >
    {text}
  </button>
);

CustomButton.defaultProps = {
  type: 'button',
  btnClass: 'defaultBtn',
  btnValue: 'btn',
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  btnClass: PropTypes.string,
  btnValue: PropTypes.string,
};

export default CustomButton;
