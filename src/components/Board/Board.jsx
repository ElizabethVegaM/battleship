import React, { Component } from 'react';

class Board extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { canvas } = this;
    const context = canvas.getContext('2d');
  }

  render() {
    return (
      <canvas ref={(c) => { this.canvas = c; }} width={400} height={400} />
    );
  }
}

export default Board;
