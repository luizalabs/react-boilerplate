import React from 'react';
const { PropTypes } = React;

const ErrorMessage = ({ reason }) => <div>{reason}</div>;

const { string } = PropTypes;
ErrorMessage.propTypes = {
  reason: string.isRequired
};

module.exports = ErrorMessage;
