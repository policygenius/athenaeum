/* eslint-disable */
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const MainNav = require('../src/organisms/navigation/MainNavigator');
const MainNav = require('./build/index.js');

const html = ReactDOMServer.renderToString(React.createElement(MainNav.default));

console.log('html works!', html);
