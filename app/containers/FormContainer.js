import React from 'react';
const { Component, PropTypes } = React;
const { reduxForm } = require('redux-form');
const { connect } = require('react-redux');

import Form from '../components/Form';

import productActions from '../actions/product';

const { func, shape, bool, object } = PropTypes;
const validate = values => {
  let errors = {};

  if (! /^[0-9]{7}$/.test(values.id)) {
    errors = Object.assign({}, errors, { id: 'Must be 7 numbers' });
  }

  return errors;
};

class FormContainer extends Component {
  static propTypes = {
    getProduct: func.isRequired,
    fields: shape({ id: object.isRequired }).isRequired,
    handleSubmit: func.isRequired,
    submitting: bool.isRequired
  };

  render() {
    const {
      getProduct,
      fields: { id: idField },
      handleSubmit,
      submitting
    } = this.props;
    const childrenProps = { idField, submitting };

    return (
      <Form
        onSubmit={handleSubmit(({ id }) => getProduct(id))}
        {...childrenProps}
      />
    );
  }
}

module.exports = connect(() => ({}), productActions)(
  reduxForm({
    form: 'product',
    fields: ['id'],
    validate
  })(FormContainer)
);
