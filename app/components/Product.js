import React from 'react';
const { PropTypes } = React;

const Product = ({ details }) => {
  return (
    <div>
      <h1>{details.title}</h1>
      <h3>ID: {details.id}</h3>
      <div>Preço de: {details.prices.from}</div>
      <div>Preço por: {details.prices.to}</div>
      <div>Preço à vista: {details.prices.cash}</div>
    </div>
  );
};

const { shape, string, number } = PropTypes;
Product.propTypes = {
  details: shape({
    title: string.isRequired,
    id: string.isRequired,
    prices: shape({
      from: number.isRequired,
      to: number.isRequired,
      cash: number.isRequired
    }).isRequired
  }).isRequired
};

module.exports = Product;
