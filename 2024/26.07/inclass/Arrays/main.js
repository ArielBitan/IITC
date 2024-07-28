// 1.
let foods = ["hamburger", "pizza", "sushi", "falafel", "chicken"];
console.log(foods);

// 2.
console.log(foods[2]);

// 3.
foods[1] = "pasta";
console.log(foods);

// 4.
foods.push("avocado");
console.log(foods);

// 5.
foods.shift();
console.log(foods);

// 6.
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// 7.
console.log(foods.indexOf("falafel"));

// 8.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
