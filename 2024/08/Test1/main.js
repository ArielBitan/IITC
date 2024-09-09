"use strict";

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};

// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
  student.age = newAge;
}

updateAge(student_1, 18);
//console.log("Updated Student:", student_1);

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};

// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  product.categories.push(category);
}

addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1);

// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
  return product.isAvailable ? true : false;
}

const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);

// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i];
    }
  }
  console.log("no product found");
}

const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct);

// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].categories.length; j++) {
      if (products[i].categories[j] === category) {
        count++;
      }
    }
  }
  return count;
}

const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);

// 🙂 Task 6: Get Student Ages 🙂

// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
  const studentAges = [];
  for (let i = 0; i < students.length; i++) {
    studentAges.push(students[i].age);
  }
  return studentAges;
}

const ages = getStudentAges(students);
// console.log("Student Ages:", ages);

// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
  const productsByCategory = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].categories.length; j++) {
      if (products[i].categories[j] === category) {
        productsByCategory.push(products[i]);
      }
    }
  }
  return productsByCategory;
}

const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);

// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);

// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}

addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);

// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
  let counter = 0;
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === char) {
        counter++;
      }
    }
  }
  return counter;
}

const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// console.log("Occurrences of 'c':", c_count);

// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      products[i].price = newPrice;
    }
  }
}

updatePriceByName(myProducts, "Phone", 550);
// console.log("Updated Products:", myProducts);

// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  const answer = [];
  for (let i = 0; i < strings.length; i++) {
    answer.push(strings[i].toUpperCase());
  }
  return answer;
}

const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);

// 🥵 Task 13: group strings by spaces occurrences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.

// loop through the strings array , check if our object has a key with the number of spaces
// if it doesn't create a key and assign it an empty array and then push the current string to it
function groupStringsBySpaces(strings) {
  const answer = {};
  for (let i = 0; i < strings.length; i++) {
    if (!answer[strings[i].split(" ").length - 1]) {
      answer[strings[i].split(" ").length - 1] = [];
    }
    answer[strings[i].split(" ").length - 1].push(strings[i]);
  }
  return answer;
}

const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1);

// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.

// same idea as question 13, check if there is already a key , if there isn't create an empty array , and then add value

function groupStringsByLength(strings) {
  const answer = {};
  for (let i = 0; i < strings.length; i++) {
    if (!answer[strings[i].length]) {
      answer[strings[i].length] = [];
    }
    answer[strings[i].length].push(strings[i]);
  }
  return answer;
}

const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);

// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)

// check each letter in each string , if its the first letter of the sentence (j===0) make it make it uppercase
// also if the last char (j-1) was space make it also uppercase
function capitalizeStrings(strings) {
  const newStrings = [];

  for (let i = 0; i < strings.length; i++) {
    let newString = "";
    for (let j = 0; j < strings[i].length; j++) {
      if (j === 0 || strings[i][j - 1] === " ") {
        newString += strings[i][j].toUpperCase();
      } else {
        newString += strings[i][j];
      }
    }
    newStrings.push(newString);
  }
  return newStrings;
}
const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);
