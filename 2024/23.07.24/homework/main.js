// Task 1: Variable Declaration and Boolean Expressions:

// Declare two variables, firstName and lastName, and assign them your first and last name as string values.
// Declare a variable age and assign it your age as a number.
// Declare a variable isStudent and assign it a boolean value (true if you are a student, false otherwise).

let firstName = "Ariel";
let lastName = "Bitan";
let age = 22;
let isStudent = true;

// Write a boolean expression to check if age is greater than 18. Assign the result to a variable isAdult.
// Write a boolean expression to check if firstName is equal to "John". Assign the result to a variable isJohn.

let isAdult = age > 18;
let isJohn = firstName === "John";

console.log("Is legal - " + isAdult);
console.log("Is named John - " + isJohn);

// Task 2: Functions and String Methods:
// Write a function named greet that takes two parameters, firstName and lastName.
// Inside the function, create a variable fullName that concatenates firstName and lastName with a space in between.
// Return a greeting message that says, "Hello, fullName! Welcome to the IITC Bootcamp."
// Inside the greet function, convert the fullName to uppercase before returning the greeting message.

function greet(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  let fullNameUpper = fullName.toUpperCase();
  return "Hello, " + fullNameUpper + "! Welcome to the IITC Bootcamp.";
}
console.log(greet(firstName, lastName));

// If and Else:
// Write a function named checkAge that takes one parameter, age.
// Inside the function, use an if-else statement to check:
// If age is less than 13, return "You are a child."
// If age is between 13 and 17 (inclusive), return "You are a teenager."
// If age is between 18 and 64 (inclusive), return "You are an adult."
// If age is 65 or older, return "You are a senior."

function checkAge(age) {
  if (age < 13) {
    return "You are a child";
  } else if (age >= 13 && age <= 17) {
    return "You are a teenager";
  } else if (age >= 18 && age <= 64) {
    return "You are an adult";
  } else if (age >= 65) {
    return "You are a senior";
  } else {
    return "Invalid age";
  }
}
console.log(checkAge(age));

// Switch Statement:
// Write a function named getDayMessage that takes one parameter, dayOfWeek.
// Inside the function, use a switch statement to return a message for each day of the week (Monday to Sunday).
// Example: If dayOfWeek is "Monday", return "Start of the work week!"
// If dayOfWeek is not recognized, return "Invalid day!"

function getDayMessage(dayOfWeek) {
  switch (dayOfWeek) {
    case "Monday":
      console.log("Start of the work week!");
      break;
    case "Tuesday":
      console.log("Second day of the work week!");
      break;
    case "Wednesday":
      console.log("Third day of the work week!");
      break;
    case "Thursday":
      console.log("Start of the weekend!");
      break;
    case "Friday":
      console.log("Second day of the weekend!");
      break;
    case "Saturday":
      console.log("Third day of the weekend!");
      break;
    case "Sunday":
      console.log("Almost start of the work week!");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}
getDayMessage("Tuesday");

// Write a function named checkEligibility that takes two parameters, age and isStudent.
// Inside the function, use a series of if-else statements to check the following:
// If age is less than 18 and isStudent is true, return "You are a minor student."
// If age is less than 18 and isStudent is false, return "You are a minor non-student."
// If age is between 18 and 24 and isStudent is true, return "You are a young adult student."
// If age is between 18 and 24 and isStudent is false, return "You are a young adult non-student."
// If age is 25 or older and isStudent is true, return "You are an adult student."
// If age is 25 or older and isStudent is false, return "You are an adult non-student."

function checkEligibility(age, isStudent) {
  if (age < 18) {
    if (isStudent) return "You are a minor student";
    else if (isStudent === false) return "You are a minor non-student";
  }
  if (age >= 18 && age <= 24) {
    if (isStudent) return "You are a young adult";
    else if (isStudent === false) return "You are a young adult non-student";
  }
  if (age >= 25) {
    if (isStudent) return "You are an adult student";
    else if (isStudent === false) return "You are an adult non-student";
  }
}
checkEligibility(24, false);
