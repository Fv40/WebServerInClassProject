const PORT = 8000;

const express = require("express");
const productsController = require("./controllers/products");

const app = express();

app
  .get("/", (req, res) => {
    res.send("Hello New Paltz, NY!!!");
  })
  .use("/api/v1/products", productsController)
  .listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
