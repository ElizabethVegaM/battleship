/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoardPlayerOne from './BoardPlayerOne';
import BoardPlayerTwo from './BoardPlayerTwo';
import EnemyBoard from './EnemyBoard';
// import firebase from '../Firebase/firestore';
// import { useFirestoreData } from '../customHooks/useFirestoreData';

const BoardBase = ({ gameId, status }) => {
  const [thePlayer, setPlayer] = useState('playerOne');
  useEffect(() => {
    return status ? thePlayer : setPlayer('playerTwo');
  });
  const [idForGame] = useState(gameId);
  const Container = styled.div`
  width: 270px;
  `;

  return (
    <Container>
      <p>{idForGame}</p>
      <div className="boardContainer">
        <h3>Your Board</h3>
        {status ? <BoardPlayerTwo id={gameId} /> : <BoardPlayerOne id={gameId} />}
      </div>
      <div className="boardContainer">
        <h3>Enemy Board</h3>
      </div>
      <EnemyBoard id={gameId} player={thePlayer} />
    </Container>
  );
};

BoardBase.propTypes = {
  gameId: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default BoardBase;
