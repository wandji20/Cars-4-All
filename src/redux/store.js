import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '.';

const composedEnhancement = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancement);

export default store;
