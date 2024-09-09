"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}
updateCity(person, "Los Angeles");
console.log("Updated Person:", person);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
  let ans = [];
  for (let i = 0; i < students.length; i++) {
    ans.push(students[i].name);
  }
  return ans;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
}

let student1 = getStudentById(students, 2);
console.log("Found Student:", student1);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}
addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
}

toggleAvailability(product);
console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  let index = product.categories.indexOf(category);
  product.categories.splice(index, 1);
}

removeCategory(product, "tech");
console.log("Updated Product:", product);

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let ans = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > ans) {
      ans = products[i].price;
    }
  }
  return ans;
}

let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  let ans = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].sizes.length; j++) {
      if (!ans.includes(products[i].sizes[j])) ans.push(products[i].sizes[j]);
    }
  }
  return ans;
}

let sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  for (let i = 0; i < school.students.length; i++) {
    if (school.students[i].id === studentId) {
      school.students[i].grades[subject] = newGrade;
    }
  }
}

// updateStudentGrade(school, 1, "math", 90);
// console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  let ans = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "delivered") {
      ans.push(orders[i]);
    }
  }
  return ans;
}

// let deliveredOrders = getDeliveredOrders(orders);
// console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  let ans = {};
  for (let i = 0; i < orders.length; i++) {
    if (!ans[orders[i].product]) {
      ans[orders[i].product] = 1;
    } else {
      ans[orders[i].product]++;
    }
  }
  return ans;
}

console.log("Product Counts:", countProductOccurrences(orders));
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
