/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';

class EnemyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.drawSquare = this.drawSquare.bind(this);
    this.shootShips = this.shootShips.bind(this);
    this.checkTurn = this.checkTurn.bind(this);
    this.game = null;
    this.ref = firebase.firestore().collection('games').doc(this.props.id);
    this.turn = true;
  }

  componentDidMount() {
    this.ref.get()
      .then((doc) => {
        this.game = doc.data();
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  checkTurn (event, boardKey) {
    alert('hola');
  }

  shootShips(event, boardKey) {
    const opponent = this.props.enemy;
    let opponentShips;
    switch (opponent) {
      case 'playerOne':
        if (this.turn) {
          opponentShips = this.game.playerOneShips;
          if (opponentShips.includes(boardKey)) {
            opponentShips.pop(boardKey);
            this.ref.update({
              playerOneShips: opponentShips,
            })
              .then(() => {
                alert(`Great! You sinked Player One ${boardKey} ships`);
                console.log('Document successfully updated!');
              })
              .catch((error) => {
                // The document probably doesn't exist.
                console.error('Error updating document: ', error);
              });
            event.target.className = 'enemyShip';
          } else {
            alert('You missed!');
            event.target.className = 'notEnemyShip';
          }
        }
        this.turn = false;
        this.ref.update({
          turn: false,
        });
        break;
      case 'playerTwo':
        if (this.turn === false) {
          opponentShips = this.game.playerTwoShips;
          if (opponentShips.includes(boardKey)) {
            opponentShips.pop(boardKey);
            this.ref.update({
              playerOneShips: opponentShips,
            })
              .then(() => {
                alert(`Great! You sinked Player Two ${boardKey} ships`);
                console.log('Document successfully updated!');
              })
              .catch((error) => {
                // The document probably doesn't exist.
                console.error('Error updating document: ', error);
              });
            event.target.className = 'enemyShip';
          } else {
            alert('You missed!');
            event.target.className = 'notEnemyShip';
          }
        }
        this.turn = true;
        this.ref.update({
          turn: true,
        });
        break;
      default:
        break;
    }
  }

  drawSquare(squareSize) {
    const keyArr = [];
    let squareInfo;
    const cols = 5;
    const rows = 5;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const squareKey = `s${i}${j}`;
        squareInfo = {
          key: squareKey,
          top: i * squareSize,
          left: j * squareSize,
        };
        keyArr.push(squareInfo);
      }
    }
    return keyArr.map((el) => <BoardSquare boardKey={el.key} clickFunc={this.shootShips} />);
  }

  render() {
    const Container = styled.div`
    display: inline-block;
    `;
    return (
      <Container>
        <h3>Enemy Board</h3>
        {this.drawSquare(25)}
      </Container>
    );
  }
}

EnemyBoard.propTypes = {
  id: PropTypes.string.isRequired,
  enemy: PropTypes.string.isRequired,
};

export default EnemyBoard;
