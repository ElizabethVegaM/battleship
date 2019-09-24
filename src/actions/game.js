/* eslint-disable import/prefer-default-export */
import {
  GET_ID,
} from './actionTypes';

export const getId = (dispatch) => (id) => {
  dispatch({
    type: GET_ID,
    payload: id,
  });
};

// se deben de utilizar funciones puras
// (que solo hacen una cosa y no dependen del ambiente en que están)
// dispatch es una f(x) de redux que avisa que se está terminando una acción determinada
