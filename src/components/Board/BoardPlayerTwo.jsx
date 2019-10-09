/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';

class BoardPlayerTwo extends React.Component {
  constructor(props) {
    super(props);
    this.drawSquare = this.drawSquare.bind(this);
    this.placeShips = this.placeShips.bind(this);
    this.ships = [];
    this.enemyShoots = [];
  }

  componentDidMount() {
    firebase.firestore().collection('games').doc(this.props.id)
      .onSnapshot((doc) => {
        this.enemyShoots.push(doc.data().pOneFiredSquares);
      });
  }

  placeShips(event, boardKey) {
    if (this.ships.length > 3) {
      alert('No puedes agregar más barcos');
    } else if (this.ships.length === 3) {
      console.log(this.ships);
      firebase.firestore().collection('games').doc(this.props.id).update({
        playerTwoShips: this.ships,
      })
        .then(() => {
          console.log(`Document successfully updated!${this.ships}`);
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
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
        <p>player two</p>
        {this.drawSquare(25)}
      </Container>
    );
  }
}

BoardPlayerTwo.propTypes = {
  id: PropTypes.string.isRequired,
  enemyFired: PropTypes.array,
};

export default BoardPlayerTwo;
