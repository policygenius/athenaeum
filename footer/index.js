/* eslint-disable */
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Footer = require('./static/static.js');

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Footer.default));

fs.writeFile('./footer/build/static-index.html', html, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('Successfully wrote Footer component to static-index.html');
});

