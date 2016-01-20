import React from 'react';
const { Component, PropTypes } = React;
import { connect } from 'react-redux';

import ProductLink from '../components/ProductLink';

const { object } = PropTypes;
const productProps = ({ product }) => ({ ...product });

class ProductLinkContainer extends Component {
  static propTypes = {
    details: object.isRequired
  };

  render() {
    const { details: { id, title } } = this.props;

    return id && title && <ProductLink id={id} title={title} /> || null;
  }
}

module.exports = connect(productProps)(ProductLinkContainer);
