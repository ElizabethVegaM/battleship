/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';

class BoardPlayerOne extends React.Component {
  constructor(props) {
    super(props);
    this.drawSquare = this.drawSquare.bind(this);
    this.placeShips = this.placeShips.bind(this);
    this.ships = [];
  }

  placeShips(event, boardKey) {
    const db = firebase.firestore();
    if (this.ships.length > 3) {
      alert('No puedes agregar más barcos');
    } else if (this.ships.length === 3) {
      console.log(this.ships);
      // eslint-disable-next-line react/destructuring-assignment
      db.collection('games').doc(this.props.id).update({
        playerOneShips: this.ships,
      })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('Document successfully written!');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error);
        });
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
      <Container>
        <p>player one</p>
        {this.drawSquare(25)}
      </Container>
    );
  }
}

BoardPlayerOne.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BoardPlayerOne;
