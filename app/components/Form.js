import React from 'react';
const { PropTypes } = React;

const Form = ({ idField, onSubmit, submitting }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        ID: <input {...idField} />
      </label>
      <button disabled={submitting}>Submit</button>
      { idField.touched && idField.error && <div>{idField.error}</div>}
    </form>
  );
};

const { func, bool, object } = PropTypes;
Form.propTypes = {
  idField: object.isRequired,
  onSubmit: func.isRequired,
  submitting: bool.isRequired
};

module.exports = Form;
