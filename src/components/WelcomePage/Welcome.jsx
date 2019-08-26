/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../common/CustomButton';
import BoardPlayerOne from '../Board/BoardPlayerOne';
import BoardPlayerTwo from '../Board/BoardPlayerTwo';

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
        <Grid container spacing={3}>
          <Grid xs={6}>
            <BoardPlayerOne />
          </Grid>
          <Grid xs={6}>
            <BoardPlayerTwo />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Welcome;
