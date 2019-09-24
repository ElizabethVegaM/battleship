/* eslint-disable no-console */
import React, { useState } from 'react';
import InitGame from './InitGame';
import CustomButton from '../common/CustomButton';
import firebase from '../Firebase/firestore';
import { useFirestoreData } from '../customHooks/useFirestoreData';

const Welcome = () => {
  const [game, isGame] = useState(false);
  const [actualGame, updateGame] = useState({
    openGame: false,
    gameId: null,
  });
  const ref = firebase.firestore().collection('games').where('gameIsOpen', '==', true).limit(1);
  const { firestoreData } = useFirestoreData(ref);

  const newGame = (event) => {
    if (firestoreData) {
      const data = firestoreData.data();
      isGame(true);
      updateGame({
        openGame: data.gameIsOpen,
        gameId: firestoreData.id,
      });
    }
    isGame(true);
    event.target.className = 'hiddenBtn';
    return actualGame;
  };

  return (
    <div className="container">
      <h1>BATALLA NAVAL</h1>
      <p>Bienvenido</p>
      <CustomButton onClick={newGame} text="COMENZAR" />
      {game ? <InitGame gameStatus={actualGame.openGame} id={actualGame.gameId} /> : ''}
    </div>
  );
};

export default Welcome;
