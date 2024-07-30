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

// // additional loop exercises
// // 1.
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// // 2.
// let counter = 1;
// while (counter <= 15) {
//   console.log(counter);
//   counter += 2;
// }

// // 3.
// let input;
// do {
//   input = prompt("enter a number between 1-10");
//   parseInt(input);
//   console.log(input);
// } while (input < 1 || input > 10 || isNaN(input));

//// 4.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// // 5.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
//   if (i === 1) {
//     console.log("Blast off!");
//   }
// }

// 6.
// print 'num' numbers of the fibonacci sequence
function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = num1 + num2;
    console.log(sum);
    num1 = num2;
    num2 = sum;
  }
}
//fibonacci(10);

// 7.
// keep picking a random number between 1 to 'num' until we hit 3
function rollUntilThree(num) {
  let randomNum = 0;
  do {
    randomNum = Math.floor(Math.random() * num + 1);
    console.log(randomNum);
  } while (randomNum !== 3);
}
//rollUntilThree(6);

// 8.
// prints the multiplication table for 'num'(until 10)
function printMultTable(num) {
  let row = "";
  for (let i = 1; i <= 10; i++) {
    row += i * num + " ";
  }
  console.log(row);
}
//printMultTable(7);

//9.
function divisibleBy3And7() {
  let num = 1001;
  console.log(num % 3 !== 0, num % 7 !== 0);
  while (num % 3 !== 0 || num % 7 !== 0) {
    num++;
    console.log(num);
  }
}
//divisibleBy3And7();

// 10.
// function receives a number and returns its factorial
function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  console.log(sum);
}
//factorial(5);

function guessSecretNumber(num) {
  let randomNum = Math.floor(Math.random() * num + 1);
  let playerGuess = 0;
  do {
    playerGuess = Number(prompt("Enter your guess"));
    if (playerGuess > randomNum) {
      alert("lower");
    } else if (playerGuess < randomNum) {
      alert("higher");
    }
  } while (playerGuess !== randomNum);
  alert(`Guessed correcty! number was ${randomNum}`);
}
//guessSecretNumber(10);
