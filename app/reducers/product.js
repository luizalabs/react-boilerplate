module.exports = (state = {
  isFetching: false,
  details: {
    prices: {
      from: 0,
      to: 0,
      cash: 0
    },
    title: '',
    id: '',
    subcategory: ''
  },
  error: ''
}, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return Object.assign({}, state, {
        isFetching: true,
        error: ''
      });
    case 'RECEIVE_PRODUCT':
      return Object.assign({}, state, {
        isFetching: false,
        details: action.json,
        error: ''
      });
    case 'INVALID_PRODUCT':
      return Object.assign({}, state, {
        isFetching: false,
        details: {},
        error: action.reason
      });
    default:
      return state;
  }
};
