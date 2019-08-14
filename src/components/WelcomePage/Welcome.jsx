/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import CustomButton from '../common/CustomButton';
import Board from '../Board/Board';

class Welcome extends Component {
  constructor() {
    super();
    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    // eslint-disable-next-line no-alert
    alert('aloooo');
  }

  render() {
    return (
      <div className="container">
        <h1>BATALLA NAVAL</h1>
        <p>Bienvenido</p>
        <CustomButton onClick={this.newGame} text="INICIAR PARTIDA" />
      </div>
    );
  }
}

export default Welcome;
