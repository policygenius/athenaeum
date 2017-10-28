/* eslint-disable */
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Footer = require('./static/static.js');
const ServerStyleSheet = require('styled-components').ServerStyleSheet;

const sheet = new ServerStyleSheet();

const html = ReactDOMServer.renderToStaticMarkup(
  sheet.collectStyles(React.createElement(Footer.default))
);

const css = sheet.getStyleTags();

fs.writeFile('./footer/build/static-index.html', css + html, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('Successfully wrote Footer component to static-index.html');
});
