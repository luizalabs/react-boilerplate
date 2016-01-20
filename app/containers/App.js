import React from 'react';
const { Component } = React;

import FormContainer from './FormContainer';
import ProductLinkContainer from './ProductLinkContainer';

module.exports = class App extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <ProductLinkContainer />
      </div>
    );
  }
};
