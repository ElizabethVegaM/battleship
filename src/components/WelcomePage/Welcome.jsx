/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import InitGame from './InitGame';
import CustomButton from '../common/CustomButton';
import firebase from '../Firebase/firestore';

const db = firebase.firestore();

const useFirestoreData = (ref) => {
  const [docState, setDocState] = useState({
    firestoreData: null,
  });

  useEffect(() => {
    ref.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDocState({
            firestoreData: doc,
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  });
  return docState;
};

const Welcome = () => {
  const [game, isGame] = useState(false);
  useEffect(() => {
    
  });
  const [actualGame, updateGame] = useState({
    openGame: false,
    gameId: null,
  });
  const ref = db.collection('games').where('gameIsOpen', '==', true).limit(1);
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
