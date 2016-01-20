import React from 'react';

const   { Component, PropTypes } = React;
import  { connect } from 'react-redux';

import Product from '../components/Product';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const { object, bool, string } = PropTypes;
const productProps = ({ product }) => ({ ...product });

class ProductContainer extends Component {
  static propTypes = {
    isFetching: bool.isRequired,
    details: object.isRequired,
    error: string.isRequired,
  };

  render() {
    const { error, isFetching, details } = this.props;

    return error && <ErrorMessage reason={error} /> ||
      isFetching && <Loading /> ||
      <Product details={details} />;
  }
}

module.exports = connect(productProps)(ProductContainer);
