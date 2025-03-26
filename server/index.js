const PORT = 8000;

const express = require('express');
const productsController = require('./controllers/products')

const app = express();

app
   .get('/', (req, res) => {
     res.send('Hello New Paltz, NY!!!')
   })
   .use('/products', productsController)
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});