const request = require("supertest");
const app = require("../server.js");

describe("GET /products", () => {
  it("should respond with JSON data", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should respond with status code 200", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
  });
});

it("should fetch a product by id", async () => {
  const productId = 4643; // Test with a known valid product ID
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(200); // Check that status is 200 OK
  expect(response.body.message).toBe("Successfully fetched product data"); // Check message
  expect(response.body.data).toBeDefined(); // Check that there is data returned
  expect(response.body.data.id).toBe(productId); // Check that the product ID matches
});

it("should return 500 for server error", async () => {
  const productId = "invalid-id"; // A product ID that does not exist
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(500);
  expect(response.text).toBe("Server Error");
});

it("should return 404 for invalid product id", async () => {
  const productId = 231243; // A product ID that does not exist
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(404);
  expect(response.body.error).toBe(`No product with id ${productId}`);
});

describe("POST /carts", () => {
  it("should create a new cart and return the cart ID", async () => {
    const response = await request(app).post("/carts").send({}); // Sending an empty body

    expect(response.status).toBe(201); // Expect a 201 status code
    expect(response.body).toBeDefined(); // Ensure the response body is defined
    expect(response.body.created).toBe(true); // Check if the cart was created
    expect(response.body.cartId).toBeDefined(); // Check if cartId is returned
  });
});

describe("add", () => {
  test("return success", () => {
    expect(app.add()).toBe("success");
  });
});

describe("sum", () => {
  test("sum two positive numbers", () => {
    expect(app.sum(1, 3)).toBe(4);
  });
});

describe("Cart API", () => {
  let cartId;

  describe("POST /carts", () => {
    it("should create a new cart and return the cart ID", async () => {
      const response = await request(app).post("/carts").send({});

      expect(response.status).toBe(201);
      expect(response.body).toBeDefined();
      expect(response.body.created).toBe(true);
      expect(response.body.cartId).toBeDefined();

      cartId = response.body.cartId;
    });
  });

  describe("POST /carts/:cartId/items", () => {
    it("should add an item to the cart", async () => {
      const response = await request(app)
        .post(`/carts/${cartId}/items`)
        .send({ productId: 4643, quantity: 2 });

      expect(response.status).toBe(201);
      expect(response.body).toBeDefined();
      expect(response.body.message).toBe("Item successfully added to the cart");
      expect(response.body.cartId).toBe(cartId);
      expect(response.body.item.productId).toBe(4643);
      expect(response.body.item.quantity).toBe(2);
    });

    it("should return 400 for missing productId", async () => {
      const response = await request(app)
        .post(`/carts/${cartId}/items`)
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toBeDefined();
      expect(response.body.error).toBe("Missing required parameter: productId");
    });

    it("should return 404 for invalid cartId", async () => {
      const invalidCartId = "aaaaa";

      const response = await request(app)
        .post(`/carts/${invalidCartId}/items`)
        .send({ productId: 1234 });

      expect(response.status).toBe(404);
      expect(response.body).toBeDefined();
      expect(response.body.error).toBe(
        `No cart found with id ${invalidCartId}`
      );
    });
  });
});
