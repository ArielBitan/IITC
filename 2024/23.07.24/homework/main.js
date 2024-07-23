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
    else if (!isStudent) return "You are a minor non-student";
  }
  if (age >= 18 && age <= 24) {
    if (isStudent) return "You are a young adult";
    else if (!isStudent) return "You are a young adult non-student";
  }
  if (age >= 25) {
    if (isStudent) return "You are an adult student";
    else if (!isStudent) return "You are an adult non-student";
  }
}
console.log(checkEligibility(25, false));

// Write a function named formatName that takes one parameter, name.
// Inside the function, use trim() to remove any leading or trailing whitespace from the name.
// Use toLowerCase() to convert the name to lowercase.
// Check if the formatted name is equal to "admin":
// If true, return "Welcome, Admin!"
// Else, return "Hello, name!"

function formatName(name) {
  name.trim();
  nameLowerCase = name.toLowerCase();
  if (nameLowerCase === "admin") {
    return "Welcome Admin!";
  } else {
    return "Hello " + name + "!";
  }
}

console.log(formatName("Ariel"));
console.log(formatName("Admin"));

// Nested If Statements:
// Write a function named checkDiscount that takes two parameters, age and isMember.
// Inside the function, use nested if statements to determine the discount:
// If age is less than 18:
// If isMember is true, return "You get a 20% discount."
// Else, return "You get a 10% discount."
// If age is 65 or older:
// If isMember is true, return "You get a 30% discount."
// Else, return "You get a 20% discount."
// If age is between 18 and 64:
// If isMember is true, return "You get a 10% discount."
// Else, return "No discount available."

function checkDiscount(age, isMember) {
  if (age < 18) {
    if (isMember) return "You get a 20% discount.";
    else return "You get a 10% discount.";
  }
  if (age >= 65) {
    if (isMember) return "You get a 30% discount.";
    else return "You get a 20% discount.";
  }
  if (age >= 18 && age < 65) {
    if (isMember) return "You get a 10% discount";
    else return "No discount available";
  }
}
console.log(checkDiscount(55, false));
console.log(checkDiscount(9, true));

// Additional Task: Combining Conditions and Functions
// Login Validation:
// Write a function named validateLogin that takes two parameters, username and password.
// Inside the function, create a variable storedUsername and assign it a string value representing the correct username.
// Create a variable storedPassword and assign it a string value representing the correct password.
// Use an if-else statement to check:
// If username is equal to storedUsername and password is equal to storedPassword, return "Login successful."
// Else, return "Invalid username or password."

function validateLogin(username, password) {
  let storedUsername = "ariel368";
  let storedPassword = "password123";
  if (username === storedUsername && password === storedPassword) {
    console.log("Logic successful.");
  } else {
    console.log("Invalid username/password");
  }
}
validateLogin("ariel368", "password123");
validateLogin("ariel333", "pass234");
