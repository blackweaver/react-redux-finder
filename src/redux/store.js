// Store
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducers } from './reducers/rootReducers';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));
