/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoardPlayerOne from './BoardPlayerOne';
import BoardPlayerTwo from './BoardPlayerTwo';
import EnemyBoard from './EnemyBoard';
import firebase from '../Firebase/firestore';
import { useFirestoreData } from '../customHooks/useFirestoreData';

const BoardBase = ({ gameId, status }) => {
  const [notPlayer, setPlayer] = useState('playerOne');
  useEffect(() => {
    if (!status) {
      setPlayer('playerTwo');
    }
  });
  const ref = firebase.firestore().collection('games').doc(gameId);
  const { firestoreData } = useFirestoreData(ref);
  const Container = styled.div`
  width: 270px;
  `;

  return (
    <div>
      <Container>
        <div className="boardContainer">
          <h3>Your Board</h3>
          {status ? <BoardPlayerTwo id={gameId} /> : <BoardPlayerOne id={gameId} />}
        </div>
        <div className="boardContainer">
          {firestoreData.gameIsOpen ? <p>Esperando Jugador</p> : <EnemyBoard id={gameId} enemy={notPlayer} />}
        </div>
      </Container>
    </div>

  );
};

BoardBase.propTypes = {
  gameId: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default BoardBase;
