/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = (props) => {
  const { boardKey, propStyle, clickFunc } = props;
  return (
    <div key={boardKey} className="square" style={propStyle} onClick={(event) => { clickFunc(event, boardKey); }} />
  );
};

BoardSquare.propTypes = {
  boardKey: PropTypes.string.isRequired,
  propStyle: PropTypes.string,
  clickFunc: PropTypes.func.isRequired,
};

export default BoardSquare;
