/* eslint-disable */
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MainNav = require('./build/component.js');
const fs = require('fs');

const html = ReactDOMServer.renderToString(<MainNav.default />);

fs.writeFile('./main_nav/component-index.html', html, (err) => {
  if (err) {
    console.log('ERR:', err);
    return;
  }

  console.log('html works!', html);
  console.log('Successfully wrote MainNav component to component-index.html');
});

