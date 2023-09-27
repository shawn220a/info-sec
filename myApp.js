const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet!
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8000);
