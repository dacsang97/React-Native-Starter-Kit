/**
 * Created by sang on 11/3/16.
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';


export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
  );
  const store = createStore(rootReducer, initialState, enhancer)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }
  return store;
}
