import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import ordersReducer from './reducers/getHistorial.reducer';
import TaskReducer from './reducers/tareas.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    rootTask: TaskReducer,
    rootOrders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = compose(
  applyMiddleware(thunk),
);

export const store = createStore(persistedReducer, enhancers);
export const storePersisted = persistStore(store);
