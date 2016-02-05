import expect from 'expect';
import rewire from 'rewire';

import mockStore from './mock-store';
import actions from '../../app/actions/product';

describe('productActions', () => {
  let id;
  let json;
  const invalidProductId = (_id) => `Invalid product id: ${_id}`;

  before(() => {
    id = '1234567';
    json = {
      key: 'value'
    };
  });

  it('get product action should create GET_PRODUCT action', () => {
    expect(actions.getProductAction(id)).toEqual({
      type: 'GET_PRODUCT',
      id
    });
  });

  it('receive product action should create RECEIVE_PRODUCT action with json', () => {
    expect(actions.receiveProductAction(id, json)).toEqual({
      type: 'RECEIVE_PRODUCT',
      id,
      json
    });
  });

  it('receive invalid product action should create INVALID_PRODUCT action with reason', () => {
    expect(actions.invalidProductAction(id)).toEqual({
      type: 'INVALID_PRODUCT',
      reason: invalidProductId(id)
    });
  });

  it('getProduct dispatches invalid product action if id is falsy', (done) => {
    const emptyId = '';
    const expectedActions = [
      { type: 'INVALID_PRODUCT', reason: invalidProductId(emptyId) }
    ];
    const store = mockStore({}, expectedActions, done);

    store.dispatch(actions.getProduct(emptyId));
  });

  it('getProduct dispatches actions on success', (done) => {
    const result = {
      title: 'iPhone',
      prices: {
        from: 100.0,
        to: 90.0,
        cash: 80.0
      },
      subcategory: 'iphones',
      id
    };
    const expectedActions = [
      { type: 'GET_PRODUCT', id },
      { type: 'RECEIVE_PRODUCT', id, json: result },
      { type: 'redux-form/RESET', form: 'product' }
    ];
    const store = mockStore({}, expectedActions, done);

    actions.__set__('reset', () => {
      return expectedActions[0];
    });

    store.dispatch(actions.getProduct(id));
  });
});
