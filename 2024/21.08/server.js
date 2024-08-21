const express = require("express");
const app = express();
const { getProducts, getProductById } = module.require("./data");

app.get("/", (req, res) => {
  res.send("Welcome to my basic express server!");
});

app.get("/about", (req, res) => {
  res.send("This server was created by ariel bitan");
});

app.get("/contact", (req, res) => {
  res.json({ email: "bitan502@gmail.com", phoneNumber: "34353244" });
});

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  res.json(getProductById(productId));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
