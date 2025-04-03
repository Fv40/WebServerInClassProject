const PORT = 8000;

const productsController = require("./controllers/products");
const express = require("express");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON from request body

// Controllers
app
  .get("/hello", (req, res) => {
    res.send("Hello New Paltz, NY!!!");
  })
  .use('/', express.static('dist')) 
  .use("/api/v1/products", productsController)
  .listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;

  const error = {
    status,
    message: err.message || "Internal Server Error",
  };
  res.status(status).send(error);
});
