const { createStore, applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk');
const reducers = require('../reducers');

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(reducers, initialState);

  // Just for HMR
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
};
