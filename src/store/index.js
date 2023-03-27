import { createStore, combineReducers } from 'redux';
import TaskReducer from './reducers/tareas.reducer';

const rootReducer = combineReducers({
    rootTask: TaskReducer,
})

export default createStore(rootReducer);