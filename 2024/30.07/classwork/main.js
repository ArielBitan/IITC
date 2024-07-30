/*Exercise 4: Count Vowels and Consonants
Objective: Write a program to count the number of vowels and consonants in a given string.
Instructions:
Take a string as input.
Use a loop to iterate over each character in the string.
Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
Keep a count of vowels and consonants.
for simplicity,string should contain only letters.
Example Output:
For input = "hello", output: Vowels: 2, Consonants: 3
For input = "world", output: Vowels: 1, Consonants: 4 
*/

// 4.
function countVowelsAndConsonants(string) {
  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "u" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "e" ||
      string[i] === "a"
    ) {
      vowels++;
    } else if (string[i] === " ") {
    } else {
      consonants++;
    }
  }
  console.log(
    ` in the word '${string} - '\n Vowels - ${vowels} \n consonants - ${consonants}`
  );
}
//countVowelsAndConsonants("hello world");

// 5.
/*Exercise 5: Reverse a String
Objective: Write a program that reverses a given string using nested loops.
Instructions:
Take a string as input.
Use a loop to iterate over each character in the string.
Use a nested loop to reverse the string by iterating from the end to the beginning.
Example Output:
For input = "hello", output: olleh
For input = "world", output: dlrow
*/

function reverseString(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += string[string.length - 1 - i];
  }
  console.log(newString);
}
//reverseString("hello");

/* Exercise 6: Number Pyramid
Objective: Create a program that prints a number pyramid.
Instructions:
Use nested loops to print a pyramid of numbers.
The outer loop should iterate through the number of rows (e.g., 5).
The inner loop should print numbers from 1 up to the current row number.
Example Output:
1
12
123
1234
12345
*/

function numberPyramid(number) {
  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

//numberPyramid(10);

/*
Exercise 7: Sum of 2D Array Elements
Objective: Calculate the sum of all elements in a 2D array.
Instructions:
Create a 2D array with numbers.
Use nested loops to iterate over each element.
Sum all the elements and print the total.
Example Output:
For arr = [[1, 2], [3, 4], [5, 6]], output: Sum: 21
*/

function sum_2DArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  console.log(sum);
}
// sum_2DArray([
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3],
// ]);

/*
Exercise 8: Character Frequency
Objective: Write a program to find the frequency of each character in a string.
Instructions:
Take a string as input.
Use nested loops to count the frequency of each character.
Print each character and its frequency.
Example Output:
For input = "hello", output: h: 1, e: 1, l: 2, o: 1
*/
function charFreq(string) {
  let duplicateChar = null;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let count = 0;
    if (char === " ") continue;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === char) {
        count++;
        if (count > 1) duplicateChar = char;
      }
    }
    console.log(`${char} : ${count}`);
  }
}
charFreq("hello world");

/*
Exercise 9: Flatten a 2D Array
Objective: Convert a 2D array into a 1D array.
Instructions:
Create a 2D array with some numbers.
Use nested loops to iterate over each element.
Store all elements in a new 1D array and print the result.
Example Output:
For arr = [[1, 2], [3, 4], [5, 6]], output: [1, 2, 3, 4, 5, 6]
*/

function flattenArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      arr.push(array[i][j]);
    }
  }
  console.log(arr);
}
// flattenArray([
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3],
// ]);

/*
Exercise 10: Matrix Transpose
Objective: Transpose a given matrix.
Instructions:
Create a 2D array representing a matrix.
Use nested loops to switch the rows and columns of the matrix.
Print the transposed matrix.
Example Output:
For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]
*/

function transposeMatrix(array) {
  let arr = [[]];
  for (let i = 0; i < array[i].length; i++) {
    console.log(i);
    for (let j = 0; j < array.length - 1; j++) {
      arr.push([array[j][i]]);
      console.log("pushed");
    }
  }
  console.log(arr);
}

// transposeMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);
