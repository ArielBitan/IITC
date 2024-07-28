// // loop exercises
// // 1.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// // 2.
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// // 3.
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// // 4.
// for (let i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

// // 5.
// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// // while loop exercises
// // 1.
// let counter = 1;
// while (counter <= 10) {
//   console.log(counter++);
// }

// // 2.
// let num = 1;
// while (num <= 100) {
//   num *= 2;
//   console.log(num);
// }

// // 3.
// let ans3 = 20;
// while (ans3 > 0) {
//   console.log(ans3--);
// }

// // 4.
// let password = "1234";
// while (password !== prompt("Enter your password")) {
//   alert("Wrong password try again");
// }

// // 5.
// let randomNum = 0;
// while (randomNum !== 5) {
//   randomNum = Math.floor(Math.random() * 10 + 1);
//   console.log(randomNum);
// }

// // do while exercises
// // 1.
// let count = 1;
// do {
//   console.log(count++);
// } while (count <= 5);

// // 2.
// // let userInput;
// do {
//   alert("Playing...");
//   userInput = prompt("Do you want to play again?");
// } while (userInput === "yes");

// // 3.
// diceRoll = Math.floor(Math.random() * 6 + 1);

// do {
//   diceRoll = Math.floor(Math.random() * 6 + 1);
//   console.log(diceRoll);
// } while (diceRoll !== 6);

// // 4.
// let x = 1;
// do {
//   x *= 2;
//   console.log(x);
// } while (x < 1000);

// // 5.
// let userInput1 = prompt("Enter a name");
// const nameList = [];
// do {
//   nameList.push(userInput1);
//   console.log(nameList);
//   userInput1 = prompt(
//     `type 'done' to stop entering names , or enter a new name`
//   );
// } while ("done" !== userInput1);
