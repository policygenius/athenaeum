/* eslint-disable */
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MainNavNew = require('./static/static.js');
const ServerStyleSheet = require('styled-components').ServerStyleSheet;

const sheet = new ServerStyleSheet();

const html = ReactDOMServer.renderToStaticMarkup(
  sheet.collectStyles(React.createElement(MainNavNew.default))
);

const css = sheet.getStyleTags();

fs.writeFile('./main_nav/build/static-index.html', html, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('Successfully wrote MainNavNew component to static-index.html');
});

fs.writeFile('./main_nav/build/assets/styled.css', css, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('Successfully wrote MainNavNew css to styled.css');
});
