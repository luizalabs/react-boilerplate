const { combineReducers } = require('redux');
const { reducer: form } = require('redux-form');
const { routeReducer: routing } = require('redux-simple-router');

const product = require('./product');

module.exports = combineReducers({ product, form, routing });
