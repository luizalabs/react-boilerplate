const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { Router, Route } = require('react-router');
const { createHashHistory } = require('history');
const { syncReduxAndRouter } = require('redux-simple-router');

const App = require('./containers/App');
const DetailsPage = require('./containers/DetailsPage');
const configureStore = require('./store/configure');

require('../stylesheets/main.scss');

const history = createHashHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/:id" component={DetailsPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
