import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BoardSquare = (props) => {
  const { key } = props;

  const Square = styled.div`
  background: white;
  border: 2px solid palevioletred;
  width: 50px;
  height: 50px;
  `;

  return (
    <Square key={key} />
  );
};

BoardSquare.propTypes = {
  key: PropTypes.string.isRequired,
};

export default BoardSquare;
