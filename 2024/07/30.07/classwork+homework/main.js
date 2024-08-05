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
  let output = {};
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") continue;
    if (!output[string[i]]) {
      output[string[i]] = 1;
    } else {
      output[string[i]]++;
    }
  }
  console.log(output);
}
charFreq("hello");

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
  let arrMain = [];
  for (let i = 0; i < array[0].length; i++) {
    let arrSec = [];
    for (let j = 0; j < array.length; j++) {
      arrSec.push(array[j][i]);
    }
    arrMain.push(arrSec);
  }
  console.log(arrMain);
}

transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
]);

/*
Exercise 11: Palindrome Check
Objective: Check if a given string is a palindrome.
Instructions:
Take a string as input.
Use nested loops to compare characters from the beginning and end of the string.
Print whether the string is a palindrome.
Example Output:
For input = "radar", output: Palindrome
For input = "hello", output: Not a palindrome
*/
function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return "not a palindrome";
    } else {
      return "palindrome";
    }
  }
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("lappal"));

/*
Exercise 12: Find Common Elements in Two Arrays
Objective: Find common elements between two arrays.
Instructions:
Create two arrays with numbers.
Use nested loops to find and print the common elements.
Example Output:
For arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], output: Common elements: 3, 4
*/

function findCommon(arr1, arr2) {
  let ans = "Common elements: ";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        ans += `${arr1[i]}, `;
      }
    }
  }
  console.log(ans);
}
findCommon([1, 2, 3, 4], [3, 4]);

/*
Exercise 13: Check for Prime Numbers in a Range
Objective: Write a program to find all prime numbers in a given range.
Instructions:
Take a range (start and end) as input.
Use nested loops to check each number in the range.
Print the prime numbers found.
Example Output:
For range = (10, 20), output: Prime numbers: 11, 13, 17, 19
*/

function primeInRange(start, end) {
  let ans = "";
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0 || i === 2) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      ans += `${i}, `;
    }
  }
  console.log(ans);
}
//primeInRange(10, 30);

/*
Exercise 14: Sort a 2D Array by Row Sum
Objective: Sort the rows of a 2D array based on the sum of their elements.
Instructions:
Create a 2D array with numbers.
Use nested loops to calculate the sum of each row.
Sort the rows based on their sum and print the sorted array.
Example Output:
For arr = [[3, 1, 2], [1, 4, 5], [2, 3, 1]], output: [[2, 3, 1], [3, 1, 2], [1, 4, 5]]
*/

function sumRow(row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum;
}

function sortBySum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sumRow(arr[i]) < sumRow(arr[j])) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
}
sortBySum([
  [5, 3, 4],
  [2, 5, 4],
  [1, 1, 1],
  [2, 1, 1],
]);
