import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';
import firebase from '../Firebase/firestore';
import YourBoard from '../Board/YourBoard';

const InitGame = ({ gameStatus }) => {
  const [gameId, updateGameId] = useState(null);
  const db = firebase.firestore();

  const handleClick = (event) => {
    switch (event.target.value) {
      case 'join':
        alert('Te unirás a una partida');
        break;
      case 'create':
        db.collection('games').add({
          playersIngame: 1,
          gameIsOpen: true,
          playerOneShips: null,
          playerTwoShips: null,
        })
          .then((res) => {
            // eslint-disable-next-line no-console
            updateGameId(res.id);
            console.log(`Document successfully written!${res.id}`);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Error writing document: ', error);
          });
          event.target.className = 'hiddenBtn';
        break;
      default:
        alert('khé?!');
        break;
    }
  };

  const joinGameButton = <CustomButton btnValue="join" onClick={handleClick} text="UNIRSE A LA PARTIDA ACTUAL" />;
  const newGameButton = <CustomButton btnValue="create" onClick={handleClick} text="CREAR NUEVA PARTIDA" />;

  return (
    <div>
      {gameStatus ? joinGameButton : newGameButton}
      {gameId ? YourBoard(gameId) : ''}
    </div>
  );
};

InitGame.propTypes = {
  gameStatus: PropTypes.bool.isRequired,
};

export default InitGame;
