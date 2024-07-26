// Basic Function exercises
// 1.
function greet() {
  console.log("Hello World!");
}
greet();

// 2.
function square(number) {
  return number * number;
}
console.log(square(4));

// 3.
function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(5));
console.log(isEven(4));

// 4.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("ariel", "bitan"));

// 5.
function sumTwo(num1, num2) {
  return num1 + num2;
}
console.log(sumTwo(5, 20));

// 6.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 3));

// 7.
function greetPerson(name) {
  return "Hello " + name;
}
console.log(greetPerson("ariel"));

// 8.
function getAbsoluteValue(number) {
  if (number < 0) {
    return number * -1;
  } else {
    return number;
  }
}
console.log(getAbsoluteValue(-5));

// 9.
function calculateAverage(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(calculateAverage(4, 2));

// 10.
function convertToUppercase(string) {
  return string.toUpperCase();
}
console.log(convertToUppercase("hello"));

// 11.
function isPositive(number) {
  return number > 0 ? true : false;
}
console.log(isPositive(-5));

// 12.
function getFirstChar(string) {
  return string[0];
}
console.log(getFirstChar("hello"));

//13.
function areaOfRectangle(width, height) {
  return width * height;
}
console.log(areaOfRectangle(5, 3));

// 14.
function remainderDivision(num1, num2) {
  return num1 % num2;
}
console.log(remainderDivision(5, 3));

// 15.
function logType(value) {
  console.log(typeof value);
}
logType(true);

// 16.
function invertBoolean(bool) {
  return !bool;
}
console.log(invertBoolean(false));

// 17.
function concatenateStrings(string1, string2) {
  return string1 + string2;
}
console.log(concatenateStrings("hello", "world"));

// 18.
function findSmaller(num1, num2) {
  return num1 > num2 ? num2 : num1;
}
console.log(findSmaller(3, 5));
console.log(findSmaller(10, 5));

// 19.
function greetWithDefault(name) {
  return name === undefined ? "Hello Guest" : "Hello " + name;
}
console.log(greetWithDefault());
console.log(greetWithDefault("Ariel"));

// 20.
function isLongString(string) {
  return string.length > 10 ? true : false;
}
console.log(isLongString("hey"));
console.log(isLongString("sadasdsfgaggdsd"));
