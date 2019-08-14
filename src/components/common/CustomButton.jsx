/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';

const customButton = ({ text, onClick, type }) => (
  <Button
    variant="contained"
    type={type}
    onClick={onClick}
  >
    {text}
  </Button>
);

export default customButton;
