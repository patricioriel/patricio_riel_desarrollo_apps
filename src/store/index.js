import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ordersReducer from './reducers/getHistorial.reducer';
import TaskReducer from './reducers/tareas.reducer';

const rootReducer = combineReducers({
    rootTask: TaskReducer,
    rootOrders: ordersReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));