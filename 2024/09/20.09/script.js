const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 600 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Keyboard", price: 50 },
  { id: 5, name: "Mouse", price: 30 },
  { id: 6, name: "Monitor", price: 300 },
  { id: 7, name: "Printer", price: 150 },
  { id: 8, name: "Webcam", price: 80 },
  { id: 9, name: "USB Cable", price: 10 },
  { id: 10, name: "External Hard Drive", price: 120 },
];
let addedProductsSerialized;
let addedProductsDeserielized;
addedProductsDeserielized = JSON.parse(localStorage.getItem("addedProducts"));

let addedProducts = [];

const elProductsList = document.getElementById("productsList");
const elProductsTable = document.getElementById("productsTable");

if (addedProductsDeserielized) {
  addedProducts = addedProductsDeserielized;
  renderProductsList();
  calculateTotal();
}

renderAddProductsList();

// render added products to html table
function renderProductsList() {
  for (let i = 0; i < addedProducts.length; i++) {
    const existingRow = document.getElementById("row-" + addedProducts[i].id);

    if (existingRow) {
      existingRow.cells[2].innerHTML = addedProducts[i].quantity;
      existingRow.cells[3].innerHTML =
        "$" + addedProducts[i].quantity * addedProducts[i].price;
    } else {
      let totalRowIndex = elProductsTable.rows.length - 1;
      let newRow = elProductsTable.insertRow(totalRowIndex);
      newRow.setAttribute("id", "row-" + addedProducts[i].id);

      newRow.insertCell(0).innerHTML = addedProducts[i].name;
      newRow.insertCell(1).innerHTML = "$" + addedProducts[i].price;
      newRow.insertCell(2).innerHTML = addedProducts[i].quantity;
      newRow.insertCell(3).innerHTML =
        "$" + addedProducts[i].quantity * addedProducts[i].price;

      let removeBtn;
      removeBtn = document.createElement("BUTTON");
      removeBtn.className = "remove-btn";
      removeBtn.innerHTML = "Remove Item";
      removeBtn.addEventListener("click", function () {
        removeItem(newRow.id);
      });
      let removeProduct = newRow.insertCell(4);
      removeProduct.appendChild(removeBtn);
    }
  }
}

// find the product using the productId, if it doesn't exist in the 'cart' add it , else add 1 to it's quantity,then render the table and calc total.
function addItem(productId) {
  const product = products.find((value) => value.id === productId);
  const addedProduct = addedProducts.find((value) => value.id === productId);

  if (!addedProduct) {
    const productToAdd = { ...product, quantity: 1 };
    addedProducts.push(productToAdd);
  } else {
    addedProduct.quantity++;
  }

  addedProductsSerialized = JSON.stringify(addedProducts);
  localStorage.setItem("addedProducts", addedProductsSerialized);

  renderProductsList();
  calculateTotal();
}

// remove item from table using rowId, find the product by removing the 'row-' part from the id and searching in addedProducts array and then splice it out.
function removeItem(rowId) {
  const rowToRemove = document.getElementById(rowId);
  rowToRemove.remove();

  const productId = parseInt(rowId.split("-")[1]);
  const productIndex = addedProducts.findIndex(
    (product) => product.id === productId
  );

  addedProducts.splice(productIndex, 1);
  calculateTotal();
  addedProductsSerialized = JSON.stringify(addedProducts);
  localStorage.setItem("addedProducts", addedProductsSerialized);
}

function calculateTotal() {
  let total = 0;
  addedProducts.forEach((product) => {
    total += product.price * product.quantity;
  });

  document.getElementById("total").innerHTML = `Total: $${total}`;
}

// render the products list with 'add' buttons
function renderAddProductsList() {
  elProductsList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const listing = products[i];

    const elListing = document.createElement("li");
    elListing.setAttribute("id", "el-" + listing.id);

    elListing.innerHTML = `
          <span>${listing.name}</span>
          <span>${listing.price}</span>
          <button onclick="addItem(${listing.id})">Add</button>
        `;
    elProductsList.appendChild(elListing);
  }
}
