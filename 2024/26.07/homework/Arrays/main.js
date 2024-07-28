// arrays exercises
// 1.
let fruits = ["banana", "mango", "apple"];
console.log(fruits);

// 2.
fruits.push("strawberry");
console.log(fruits);

// 3.
fruits.pop;
console.log(fruits);

// 4.
let nums = [1, 2, 3, 4, 5];
console.log(nums[2]);

// 5.
fruits[1] = "kiwi";

// 6.
let colors = [];
colors.push("red", "green", "blue");
console.log(colors);

// 7.
colors.shift();
console.log(colors);

// 8.
colors.unshift("yellow");
console.log(colors);

// 9.
let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// 10.
console.log(colors.indexOf("green"));

// 11.
let randomNums = [5, 9, 102, 33, 45];
let highestNum = randomNums[0];
for (let i = 0; i < randomNums.length; i++) {
  if (highestNum < randomNums[i]) {
    highestNum = randomNums[i];
  }
}
console.log(highestNum);

// 12.
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

// 13.
let numbers1 = [1, 5, 6, 8, 2];
let evenNumbers1 = numbers1.filter(evenNums);
function evenNums(number) {
  return number % 2 === 0;
}
console.log(evenNumbers1);

// 14.
console.log(colors.join(","));

// 15.
let array1 = [1, 6, 7, 3];
let array2 = [3, 6, 8, 5];
let array3 = array1.concat(array2);
console.log(array3);

// 16.
console.log(colors.reverse());

// 17.
let names = ["ariel", "ido", "itay"];
console.log(names.map(helloName));

function helloName(name) {
  return "hello " + name;
}

// 18.
let arr1 = [1, 5, -2, 9];
console.log(arr1.every(aboveZero));
function aboveZero(num) {
  return num >= 0;
}

// 19.
let arr2 = [2, 5, 6, 25, 16];
console.log(arr2.find(biggerThanTen));
function biggerThanTen(number) {
  return number > 10;
}

// 20.
console.log(fruits.some(isBanana));
function isBanana(fruit) {
  return fruit === "banana";
}

// 21.
let arr4 = [1, 3, 5, 5];
console.log(arr4.reduce(multiplyNums));
function multiplyNums(accumulator, curValue) {
  return accumulator * curValue;
}

// 22.
let arr5 = [];
for (let i = 1; i <= 10; i++) {
  arr5[i] = i * i;
}
console.log(arr5);

// 23.
let words1 = ["absada", "abd", "srertasd", "aa", "degfed"];
console.log(words1.filter(moreThanFiveLetters));
function moreThanFiveLetters(word) {
  return word.length > 5;
}

// 24.
console.log(colors.includes("purple"));

// 25.
let nestedArr = [
  ["X", "O", "X"],
  [" ", "O", " "],
  ["X", " ", "O"],
];
for (let i = 0; i < nestedArr.length; i++) {
  console.log(nestedArr[i].join(" "));
}
