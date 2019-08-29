import React, { useState, useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import CustomButton from '../common/CustomButton';
// import BoardPlayerOne from '../Board/BoardPlayerOne';
// import BoardPlayerTwo from '../Board/BoardPlayerTwo';
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
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data());
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

  const handleClick = () => {
    
  };

  const joinGameButton = <CustomButton onClick={handleClick} text="UNIRSE A LA PARTIDA ACTUAL" />;
  const newGameButton = <CustomButton onClick={handleClick} text="CREAR NUEVA PARTIDA" />;

  const newGame = (event) => {
    if (firestoreData) {
      const data = firestoreData.data();
      isGame(true);
      updateGame({
        openGame: data.gameIsOpen,
        gameId: firestoreData.id,
      });
    } else {
      isGame(true);
    }
    event.target.className = 'hiddenBtn';
    return actualGame;
  };

  const condRender = actualGame.openGame ? joinGameButton : newGameButton;

  return (
    <div className="container">
      <h1>BATALLA NAVAL</h1>
      <p>Bienvenido</p>
      <CustomButton onClick={newGame} text="COMENZAR" />
      {game ? condRender : ''}
    </div>
  );
};

/* <Grid container spacing={3}>
<Grid xs={6}>
  <BoardPlayerOne />
</Grid>
<Grid xs={6}>
  <BoardPlayerTwo />
</Grid>
</Grid> */

export default Welcome;
