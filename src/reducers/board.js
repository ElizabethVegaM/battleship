import {
  DRAW_BOARD,
} from '../actions/actionTypes';

export default (
  // estado anterior(o inicial)
  state = {

  },
  action,
) => {
  switch (action.type) {
    // ...state lo que hace es copiar el estado anterior y sobreescribe lo que se quiere modificar
    case DRAW_BOARD:
      return {
        ...state,
        menu: action.payload,
      };
    default: return state;
  }
};
