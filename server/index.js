const PORT = 8000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});