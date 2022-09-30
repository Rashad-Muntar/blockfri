import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cryptoReducer from '../Reducers/cryptoReducer';

const store = createStore
// const store = createStore(cryptoReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;