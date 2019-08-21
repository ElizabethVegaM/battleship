/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../common/CustomButton';
import Board1 from '../Board/Board1';
import Board2 from '../Board/Board2';

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
        <Container>
          <Grid xs={6}>
            <Board1 />
          </Grid>
          <Grid xs={6}>
            <Board2 />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Welcome;
