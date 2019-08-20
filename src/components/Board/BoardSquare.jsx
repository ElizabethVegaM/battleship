import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = (props) => {
  const { key, propStyle } = props;

  return (
    <div key={key} className="square" style={propStyle} />
  );
};

BoardSquare.propTypes = {
  key: PropTypes.string.isRequired,
  propStyle: PropTypes.string.isRequired,
};

export default BoardSquare;
