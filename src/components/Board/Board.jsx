import React, { useState } from 'react';
import BoardSquare from './BoardSquare';

const Board = () => {
  const rows = useState(5);
  const cols = useState(5);
  const squareSize = useState(25);

  for (let i = 0; i < cols; i + 1) {
    for (let j = 0; j < rows; j + 1) {
      let squareKey = `s${j}${i}`;
    }
  }

  return (
    <div>
      <BoardSquare />
    </div>
  );
};

export default Board;
