import  React from  'react';
const { Component, PropTypes } = React;
const { connect } = require('react-redux');
const { Link } = require('react-router');

import ProductContainer from './ProductContainer';
import productActions from '../actions/product';

const productProps = ({ product }) => ({ ...product });
const { func, shape, string, object } = PropTypes;

class DetailsPage extends Component {
  static propTypes = {
    details: object.isRequired,
    getProduct: func.isRequired,
    routeParams: shape({ id: string.isRequired }).isRequired
  };

  componentWillMount() {
    const {
      details: { id = '' } = {},
      getProduct,
      routeParams
    } = this.props;

    if (! id) {
      getProduct(routeParams.id);
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <ProductContainer />
      </div>
    );
  }
}


module.exports = connect(productProps, productActions)(DetailsPage);
