import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import { syncReduxAndRouter } from 'redux-simple-router';

import App from './containers/App';

import DetailsPage from './containers/DetailsPage';
import configureStore from './store/configure';

import '../stylesheets/main.scss';

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
