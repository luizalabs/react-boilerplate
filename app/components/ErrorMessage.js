import React, { PropTypes } from 'react';

const ErrorMessage = ({ reason }) => <div>{reason}</div>;

const { string } = PropTypes;
ErrorMessage.propTypes = {
  reason: string.isRequired
};

module.exports = ErrorMessage;
