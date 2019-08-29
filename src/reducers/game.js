import {
  GET_DATA,
} from '../actions/actionTypes';

export default (
  // estado anterior(o inicial)
  state = {
    gameData: {},
    gameId: '',
    openGame: false,
    playerOneId: '',
    playerOneShips: '',
    playerTwoId: '',
    playerTwoShips: '',
  },
  action,
) => {
  switch (action.type) {
    // ...state lo que hace es copiar el estado anterior y sobreescribe lo que se quiere modificar
    case GET_DATA:
      return {
        ...state,
        gameData: action.payload,
      };
    default: return state;
  }
};
