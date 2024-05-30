// Store
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducers } from './reducers/rootReducers';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk';

// export const store = createStore(rootReducers, applyMiddleware(thunk));
/* export const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
)); */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));
