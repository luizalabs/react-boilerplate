const React = require('react');
const { Component } = React;

const FormContainer = require('./FormContainer');
const ProductLinkContainer = require('./ProductLinkContainer');

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
