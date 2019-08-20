/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';


class Board extends React.Component {
  constructor() {
    super();
    this.drawSquare = this.drawSquare.bind(this);
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
    return keyArr.map((el) => <BoardSquare key={el.key} style="left: 50px;" />);
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
