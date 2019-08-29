import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const InitGame = ({ gameStatus }) => {
  // const [checkUser, updateCheck] = useState(false);

  const handleClick = (event) => {
    const str = event.target;
    console.log(str.value);
    /*     if () {
      console.log('te unirás a la partida');
    } else {
      console.log('crearás una partida');
    } */
    // event.target.className = 'hiddenBtn';
  };

  const joinGameButton = <CustomButton value="join" onClick={handleClick} text="UNIRSE A LA PARTIDA ACTUAL" />;
  const newGameButton = <CustomButton value="create" onClick={handleClick} text="CREAR NUEVA PARTIDA" />;

  return (
    <div>
      {gameStatus ? joinGameButton : newGameButton}
    </div>
  );
};

InitGame.propTypes = {
  gameStatus: PropTypes.bool.isRequired,
};

export default InitGame;
