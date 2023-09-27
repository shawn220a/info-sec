const express = require('express');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 8000;

// Use Helmet!
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
