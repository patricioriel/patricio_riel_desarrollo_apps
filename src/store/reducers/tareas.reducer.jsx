import { AGREGAR_ITEM, ELIMINAR_ITEM, CAMBIAR_ESTADO, SELECT_ITEM } from '../actions/tareas.action';

const initialState = {
  items: [],
  selected: null
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    case CAMBIAR_ESTADO:
      const newItems = state.items.map((item) => {
        if (item === action.payload) {
          return { ...item, state: true };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
      };

    case SELECT_ITEM:
      return {
        ...state,
        selected: action.payload,
      }

    case ELIMINAR_ITEM:
      const newState = state.items.filter((item) => item !== action.payload)
      return {
        ...state,
        items: newState
      }
    default:
      return state;
  }
}

export default TaskReducer;
