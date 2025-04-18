const productsController = require("./controllers/products");
const usersController = require("./controllers/users");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT ?? 8000;

const app = express();

// Middleware
app.use(express.json()); // Parse JSON from request body

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// Controllers
app
  .get("/hello", (req, res) => {
    res.send("Hello New Paltz, NY!!!");
  })
  .use("/api/v1/products", productsController)
  .use("/api/v1/users", usersController)
  .use("/", express.static("dist"))
  .listen(PORT, () => {
    console.log(`
      Welcome to the best class at New Paltz - ${process.env.BEST_CLASS}
      Server running at http://localhost:${PORT}/
    `);
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
