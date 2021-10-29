import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '.';

// const composedEnhancement = composeWithDevTools(applyMiddleware(thunk));
// const store = createStore(rootReducer, composedEnhancement);

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));
export default store;
