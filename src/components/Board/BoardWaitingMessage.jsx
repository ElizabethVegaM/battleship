import React from 'react';
import PropTypes from 'prop-types';

const BoardWaitingMessage = ({ turn }) => {
  return (
    <p>Esperando jugador</p>
  );
};

BoardWaitingMessage.propTypes = {
  turn: PropTypes.string.isRequired,
};

export default BoardWaitingMessage;
