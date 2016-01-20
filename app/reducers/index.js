import { combineReducers } from 'redux';
const { reducer: form } = require('redux-form');
const { routeReducer: routing } = require('redux-simple-router');

import product from  './product';

module.exports = combineReducers({ product, form, routing });
