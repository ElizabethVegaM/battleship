import {
  GET_ID,
} from '../actions/actionTypes';

export default (
  // estado anterior(o inicial)
  state = {
    gameId: '',
  },
  action,
) => {
  switch (action.type) {
    // ...state lo que hace es copiar el estado anterior y sobreescribe lo que se quiere modificar
    case GET_ID:
      return {
        ...state,
        gameData: action.payload,
      };
    default: return state;
  }
};
