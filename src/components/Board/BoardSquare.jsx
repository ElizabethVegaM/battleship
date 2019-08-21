import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = (props) => {
  const { boardKey, propStyle, clickFunc } = props;
  return (
    <div key={boardKey} className="square" style={propStyle} onClick={() => {clickFunc(boardKey)}} />
  );
};

BoardSquare.propTypes = {
  boardKey: PropTypes.string.isRequired,
  propStyle: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default BoardSquare;
