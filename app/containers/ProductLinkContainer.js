const React = require('react');
const { Component, PropTypes } = React;
const { connect } = require('react-redux');

const ProductLink = require('../components/ProductLink');

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
