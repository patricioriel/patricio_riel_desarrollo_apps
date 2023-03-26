import { AGREGAR_ITEM, ELIMINAR_ITEM, CAMBIAR_ESTADO } from '../actions/tareas.action';

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ELIMINAR_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case CAMBIAR_ESTADO:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              state: true
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
}

export default reducer;
