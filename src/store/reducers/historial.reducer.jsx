import { ADD_ITEM, DELETE_ORDER} from '../actions/historial.action';


const INITIAL_STATE ={
    list:[]
}

const HistorialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: action.orders
            }
        case DELETE_ORDER:
            return {
                ...state,
                list: state.list.filter(order => order.id !== action.id)
            }
        default:
            return state;
    }
}

export default HistorialReducer;