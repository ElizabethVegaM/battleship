/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';

class Board extends React.Component {
  constructor() {
    super();
    this.drawSquare = this.drawSquare.bind(this);
    this.placeShips = this.placeShips.bind(this);
    this.ships = [];
  }

  placeShips(event, boardKey) {
    const db = firebase.firestore();
    if (this.ships.length > 3) {
      alert('No puedes agregar más barcos');
    } else if (this.ships.length === 3) {
      console.log(this.ships)
/*       db.collection('games').add({
        playerOneShips: this.ships,
        gameStatus: 'open',
      })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log(`Document successfully written!${this.ships}`);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error);
        }); */
    } else {
      this.ships.push(boardKey);
      event.target.className = 'shipSquare';
    }
  }

  drawSquare(squareSize) {
    const keyArr = [];
    let squareInfo;
    const cols = 5;
    const rows = 5;
    for (let i = 0; i < cols; i + 1) {
      for (let j = 0; j < rows; j + 1) {
        const squareKey = `s${i}${j}`;
        squareInfo = {
          key: squareKey,
          top: i * squareSize,
          left: j * squareSize,
        };
        keyArr.push(squareInfo);
      }
    }
    return keyArr.map((el) => <BoardSquare boardKey={el.key} clickFunc={this.placeShips} />);
  }

  render() {
    const Container = styled.div`
    display: inline-block;
    `;
    return (
      <div>
        <Container>
          {this.drawSquare(25)}
        </Container>
      </div>
    );
  }
}

export default Board;
