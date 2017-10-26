/* eslint-disable */
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MainNavNew = require('./static/static.js');

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(MainNavNew.default));

fs.writeFile('./main_nav/build/static-index.html', html, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('Successfully wrote MainNavNew component to static-index.html');
});

