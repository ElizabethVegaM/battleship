/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';

class EnemyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.drawSquare = this.drawSquare.bind(this);
    this.shootShips = this.shootShips.bind(this);
  }

  shootShips(event, boardKey) {
/*     firebase.firestore().collection('games').doc(this.props.id).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

        });
      })
      .catch((error) => {
      // eslint-disable-next-line no-console
        console.log('Error getting documents: ', error);
      }); */
    alert(`You shoot ${this.props.player} ${boardKey}`);
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
    return keyArr.map((el) => <BoardSquare boardKey={el.key} clickFunc={this.shootShips} />);
  }

  render() {
    const Container = styled.div`
    display: inline-block;
    `;
    return (
      <Container>
        {this.drawSquare(25)}
      </Container>
    );
  }
}

EnemyBoard.propTypes = {
  // id: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

export default EnemyBoard;
