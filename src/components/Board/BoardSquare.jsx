/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = ({ boardKey, clickFunc }) => <div key={boardKey} className="square" onClick={(event) => { clickFunc(event, boardKey); }} />;

BoardSquare.propTypes = {
  boardKey: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default BoardSquare;
