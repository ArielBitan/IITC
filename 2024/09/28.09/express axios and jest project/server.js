const express = require("express");
const sql = require("mssql");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.add = function () {
  return "success";
};

app.sum = (a, b) => {
  return a + b;
};

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://simple-grocery-store-api.glitch.me/products"
    );

    res.json({
      message: "Data successfully sent via Axios",
      data: response.data,
    });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

app.get("/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const response = await axios.get(
      `https://simple-grocery-store-api.glitch.me/products/${productId}`
    );

    // Send the product data back to the client
    res.json({
      message: "Successfully fetched product data",
      data: response.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({
        error: `No product with id ${productId}`,
      });
    }
    console.error("Error fetching product data", err);
    res.status(500).send("Server Error");
  }
});

let carts = [];

app.post("/carts", async (req, res) => {
  try {
    const response = await axios.post(
      "https://simple-grocery-store-api.glitch.me/carts"
    );

    const cartId = response.data.cartId;

    carts.push(cartId);
    console.log(carts);
    res.status(201).json({
      created: true,
      cartId: cartId,
    });
  } catch (err) {
    console.error("Error creating cart", err);
    res.status(500).send("Server Error");
  }
});

app.get("/carts", (req, res) => {
  if (carts.length === 0) {
    return res.status(200).json({
      message: "No carts have been created yet.",
    });
  }

  res.status(200).json({
    message: "Available carts:",
    carts: carts,
  });
});

app.get("/carts/:cartId", async (req, res) => {
  const cartId = req.params.cartId;

  if (!carts.includes(cartId)) {
    return res.status(404).json({
      error: `No cart found with id ${cartId}`,
    });
  }

  try {
    const response = await axios.get(
      `https://simple-grocery-store-api.glitch.me/carts/${cartId}`
    );

    res.status(200).json({
      message: "Successfully retrieved cart",
      data: response.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({
        error: `No cart found with id ${cartId}`,
      });
    }
    console.error("Error retrieving cart", err);
    res.status(500).send("Server Error");
  }
});

app.post("/carts/:cartId/items", async (req, res) => {
  const { cartId } = req.params; // Get the cartId from the URL
  const { productId, quantity = 1 } = req.body; // Get productId and quantity from the request body, default quantity to 1

  // Check if the cartId exists in memory (for this example, we're assuming `carts` is the in-memory array)
  if (!carts.includes(cartId)) {
    return res.status(404).json({
      error: `No cart found with id ${cartId}`,
    });
  }

  // Validate that productId is provided
  if (!productId) {
    return res.status(400).json({
      error: "Missing required parameter: productId",
    });
  }

  // Add the item to the cart
  try {
    const response = await axios.post(
      `https://simple-grocery-store-api.glitch.me/carts/${cartId}/items`,
      {
        productId: productId,
        quantity: quantity,
      }
    );

    // If successful, return a 201 Created response
    res.status(201).json({
      message: "Item successfully added to the cart",
      cartId: cartId,
      item: {
        productId: productId,
        quantity: quantity,
      },
    });
  } catch (err) {
    console.error("Error adding item to cart", err);

    if (err.response && err.response.status === 400) {
      return res.status(400).json({
        error: "Invalid parameters provided",
      });
    }

    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
