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
  const productId = 4643;
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Successfully fetched product data");
  expect(response.body.data).toBeDefined();
  expect(response.body.data.id).toBe(productId);
});

it("should return 500 for server error", async () => {
  const productId = "invalid-id";
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(500);
  expect(response.text).toBe("Server Error");
});

it("should return 404 for invalid product id", async () => {
  const productId = 231243;
  const response = await request(app).get(`/products/${productId}`);

  expect(response.status).toBe(404);
  expect(response.body.error).toBe(`No product with id ${productId}`);
});

describe("POST /carts", () => {
  it("should create a new cart and return the cart ID", async () => {
    const response = await request(app).post("/carts").send({});

    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.created).toBe(true);
    expect(response.body.cartId).toBeDefined();
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
