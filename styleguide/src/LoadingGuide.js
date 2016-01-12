const React = require('react');
const { Component } = React;

const Loading = require('../../app/components/Loading');

class LoadingGuide extends Component {
  static styleguide = {
    index: '1.1',
    category: 'Components',
    title: 'Loading',
    description: '**Markdown**',
    code: `<LoadingGuide/>`,
    className: ''
  };

  render() {
    return <Loading />;
  }
};

module.exports = LoadingGuide;
