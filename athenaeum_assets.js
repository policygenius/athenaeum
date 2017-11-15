const express = require('express');

const app = express();

app.use(express.static('./lib'));

app.listen(4000, () => {
  console.log('\nServing up static assets on \x1b[32mhttp://localhost:4000');
});
