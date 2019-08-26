/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import firebase from '../Firebase/firestore';


class Board2 extends React.Component {
  constructor() {
    super();
    this.drawSquare = this.drawSquare.bind(this);
    this.placeShips = this.placeShips.bind(this);
    this.ships = [];
    this.db = firebase.firestore();
    this.firebaseGameId = '';
  }

  componentDidMount() {
    this.db.collection('games').where('gameIsOpen', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.firebaseGameId = doc.id;
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  placeShips(event, boardKey) {
    if (this.ships.length > 3) {
      alert('No puedes agregar más barcos');
    } else if (this.ships.length === 3) {
      console.log(this.ships);
      const firestoreRef = this.db.collection('games').doc(this.firebaseGameId);
      firestoreRef.update({
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
      <div>
        <Container>
          <h3>Enemy Board</h3>
          {this.drawSquare(25)}
        </Container>
      </div>
    );
  }
}

export default Board2;
