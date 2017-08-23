/* eslint-disable */
import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, 'build/')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'), {
    headers: {
      'Content-Encoding': 'gzip',
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log('ERR: ', err);

    return;
  }

  console.log('listening on 3000');
});
