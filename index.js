const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello AWS');
});

app.listen('3000', () => {
  console.log('listening on port 3000');
});
