import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HistorialReducer from './reducers/historial.reducer';
import TaskReducer from './reducers/tareas.reducer';

const rootReducer = combineReducers({
    rootTask: TaskReducer,
    rootHistorial: HistorialReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));