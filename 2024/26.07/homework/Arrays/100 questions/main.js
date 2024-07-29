// 1.
let fruits = [];

// 2.
let numbers = [1, 2, 3, 4, 5];

// 3.
let colors = ["red", "green", "blue"];

// 4.
let mixed = [5, "hello", true];

// 5.
let seasons = ["fall", "winter", "spring", "summer"];

// array length
// 6.
console.log(numbers.length);

//7.
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log("empty array");
}

//8.
let dynamic = [3, 2, 5, 6, 1];
console.log(dynamic.length);

// 9.
dynamic.push(5);
console.log(dynamic.length);

// 10.
dynamic.pop();
console.log(dynamic.length);

// accessing elements
// 11.
console.log(colors[0]);

//12.
console.log(seasons[seasons.length - 1]);

// 13.
console.log(numbers[Math.floor(numbers.length / 2)]);
