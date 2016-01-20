import { reset } from 'redux-form';

function getProductAction(id) {
  return {
    type: 'GET_PRODUCT',
    id
  };
}

function receiveProductAction(id, json) {
  return {
    type: 'RECEIVE_PRODUCT',
    id,
    json
  };
}

function invalidProductAction(id) {
  const reason = `Invalid product id: ${id}`;

  return {
    type: 'INVALID_PRODUCT',
    reason
  };
}

function getProduct(id) {
  return dispatch => {
    if (! id) {
      return dispatch(invalidProductAction(id));
    }

    dispatch(getProductAction(id));
    dispatch(receiveProductAction(id, {
      title: 'iPhone',
      prices: {
        from: 100.0,
        to: 90.0,
        cash: 80.0
      },
      subcategory: 'iphones',
      id: id
    }));
    return dispatch(reset('product'));
  };
}

module.exports = { getProductAction, receiveProductAction, invalidProductAction, getProduct };
