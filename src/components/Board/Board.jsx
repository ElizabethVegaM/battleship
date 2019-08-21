/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import ShipPhoto from '../../1597474-200.png';


class Board extends React.Component {
  constructor() {
    super();
    this.drawSquare = this.drawSquare.bind(this);
    this.placeShips = this.placeShips.bind(this);
    this.ships = [];
  }

  placeShips(event, boardKey) {
    this.ships.push(boardKey);
    console.log(this.ships);
    if (this.ships.length > 3) {
      alert('No puedes agregar más barcos');
    } else {
      event.target.className = 'shipSquare';
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
