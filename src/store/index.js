import { createStore } from 'redux';
import reducer from './reducers/tareas.reducer';

const store = createStore(reducer);

export default store;
