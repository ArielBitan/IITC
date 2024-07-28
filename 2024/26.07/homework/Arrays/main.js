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
