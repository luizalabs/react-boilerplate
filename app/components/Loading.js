import React from 'react';
const { PropTypes } = React;

const Loading = ({ message }) => <div className="loading">{message || 'Loading...'}</div>;

const { string } = PropTypes;
Loading.propTypes = {
  message: string
};

module.exports = Loading;
