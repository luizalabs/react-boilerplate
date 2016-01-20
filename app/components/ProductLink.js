import React from 'react';
const { PropTypes } = React;
const { Link } = require('react-router');

const ProductLink = ({ id, title }) => <Link to={ `/${id}` }>{title}</Link>;

const { string } = PropTypes;
ProductLink.propTypes = {
  id: string.isRequired,
  title: string.isRequired
};

module.exports = ProductLink;
