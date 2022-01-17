import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import playerReducer from './player/reducer';

const reducers = combineReducers({
  player: playerReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export default store;
