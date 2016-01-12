const React = require('react');
const { Component, PropTypes } = React;
const { connect } = require('react-redux');

const Product = require('../components/Product');
const Loading = require('../components/Loading');
const ErrorMessage = require('../components/ErrorMessage');

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
