// // 1.
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((num) => console.log(num));

// // 2.
// const arr = [1, 2, 3, 4, 5];
// let sum = 1;
// arr.forEach((num) => (sum *= num));
// console.log(sum);

// // 3.
// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// arr.forEach((num) => newArr.push(num ** 2));
// console.log(newArr);

// // 4.
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((num) => (sum += num));
// console.log(sum);

// // 5.
// const arr = ["Hello", " ", "World", "!"];
// let sum = "";
// arr.forEach((word) => (sum += word));
// console.log(sum);

// // 6.
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((num) => {
//   return num * 2;
// });
// console.log(newArr);

// // 7.
// const arr = ["תפוח", "בננה", "דובדבן"];
// const itemLengths = arr.map((num) => {
//   return num.length;
// });
// console.log(itemLengths);

// // 8.
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((num) => {
//   return num ** 2;
// });
// console.log(newArr);

// // 9.
// const arr = ["hello", "world"];
// const newArr = arr.map((string) => {
//   return string.toUpperCase();
// });
// console.log(newArr);

// // 10.
// const arr = [true, false, true];
// const newArr = arr.map((value) => {
//   return !value;
// });
// console.log(newArr);

// // 11.
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((value) => {
//   return value % 2 === 0;
// });
// console.log(newArr);

// // 12.
// const arr = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const newArr = arr.filter((value) => {
//   return value.length > 5;
// });
// console.log(newArr);

// // 13.
// const arr = [5, 10, 15, 20, 25];
// const newArr = arr.filter((value) => {
//   return value > 10;
// });
// console.log(newArr);

// // 14.
// const arr = ["תפוח", "בננה", "תפוז", "דובדבן"];
// const newArr = arr.filter((value) => {
//   return value.startsWith("ת");
// });
// console.log(newArr);

// // 15.
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((value, index) => {
//   return index % 2 === 0;
// });
// console.log(newArr);

// // 16.
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, value) => {
//   return (total += value);
// }, 0);
// console.log(sum);

// // 17.
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, value) => (total *= value), 1);
// console.log(sum);

// // 18.
// const arr = [10, 50, 15, 20, 25];
// const highestNum = arr.reduce((startingNum, currNum) => {
//   if (startingNum > currNum) {
//     return startingNum;
//   }
//   startingNum = currNum;
//   return startingNum;
// });
// console.log(highestNum);

// // 19.
// const arr = ["שלום", " ", "עולם", "!"];
// const sentence = arr.reduce((total, value) => (total += value));
// console.log(sentence);

// // 20.
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const numCount = arr.reduce((total, value) => {
  if (total[value]) total[value]++;
  else total[value] = 1;
  return total;
}, {});
console.log(numCount);

// // 21.
// // 22.
// // 23.
// // 24.
// // 25.
// // 26.
// // 27.
// // 28.
// // 29.
// // 30.
// // 31.
// // 32.
// // 33.
// // 34.
// // 35.
// // 36.
// // 37.
// // 38.
// // 39.
// // 40.
// // 41.
// // 42.
// // 43.
// // 44.
// // 45.
// // 46.
// // 47.
// // 48.
// // 49.
// // 50.
// // 51.
// // 52.
// // 53.
// // 54.
// // 55.
// // 56.
// // 57.
// // 58.
// // 59.
// // 60.
// // 61.
// // 62.
// // 63.
// // 64.
// // 65.
// // 66.
// // 67.
// // 68.
// // 69.
// // 70.
// // 71.
// // 72.
// // 73.
// // 74.
// // 75.
// // 76.
// // 77.
// // 78.
// // 79.
// // 80.
// // 81.
// // 82.
// // 83.
// // 84.
// // 85.
// // 86.
// // 87.
// // 88.
// // 89.
// // 90.
// // 91.
// // 92.
// // 93.
// // 94.
// // 95.
// // 96.
// // 97.
// // 98.
// // 99.
// // 100.
