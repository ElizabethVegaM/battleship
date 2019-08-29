/* eslint-disable import/prefer-default-export */
import firebase from '../components/Firebase/firestore';
import {
  GET_DATA,
} from './actionTypes';

export const getData = (dispatch) => () => {
  const db = firebase.firestore();
  db.collection('games').where('gameIsOpen', '==', true)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch({
          type: GET_DATA,
          payload: doc,
        });
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

// se deben de utilizar funciones puras
// (que solo hacen una cosa y no dependen del ambiente en que están)
// dispatch es una f(x) de redux que avisa que se está terminando una acción determinada
