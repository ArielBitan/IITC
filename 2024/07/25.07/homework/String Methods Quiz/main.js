// String Method Exercises
// 1.
function stringLength(string) {
  return string.length;
}
console.log(stringLength("Hello"));

// 2.
function convertToUppercase(string) {
  return string.toUpperCase();
}
console.log(convertToUppercase("hello"));

// 3.
function convertToLowercase(string) {
  return string.toLowerCase();
}
console.log(convertToLowercase("HELLO"));

// 4.
function charAtIndex(string, index) {
  return string[index];
}
console.log(charAtIndex("hey", 1));

// 5.
function extractPortionOfString(string, index1, index2) {
  return string.substring(index1, index2);
}
console.log(extractPortionOfString("hello", 1, 3));

// 6.
function replaceValues(string, value, valueToReplace) {
  return string.replace(value, valueToReplace);
}
console.log(replaceValues("hello", "ll", "o"));

// 7.
function trimString(string) {
  return string.trim();
}
console.log(trimString("    hello    "));

// 8.
function checkStartingChar(string, charToCheck) {
  return string.startsWith(charToCheck) ? true : false;
}
console.log(checkStartingChar("hello", "h"));
console.log(checkStartingChar("hello", "f"));

// 9.
function checkEndingChar(string, charToCheck) {
  return string.endsWith(charToCheck) ? true : false;
}
console.log(checkEndingChar("hello", "o"));
console.log(checkEndingChar("hello", "f"));

// 10.
function checkCharIndex(string, charToCheck) {
  return string.indexOf(charToCheck);
}
console.log(checkCharIndex("hello", "o"));

// 11.
function splitString(string) {
  return string.split(" ");
}
console.log(splitString("hello my name is ariel"));

// 12.
function repeatString(string, times) {
  return string.repeat(times);
}
console.log(repeatString("hello ", 5));

// 13.
function concatStrings(string1, string2) {
  return string1.concat(string2);
}
console.log(concatStrings("hello ", "world"));

// 14.
function padString(string, length, char) {
  return string.padStart(length, char);
}
console.log(padString("what", 7, "w"));

// 15.
function sliceString(string, n) {
  return string.slice(0, n);
}
console.log(sliceString("where", 3));

//16.
function replaceFirstOccurrence(string, valueToBeReplaced, value) {
  return string.replace(valueToBeReplaced, value);
}
console.log(replaceFirstOccurrence("hey", "h", "p"));

// 17.
function isIncluded(string, value) {
  return string.includes(value);
}
console.log(isIncluded("water", "wa"));

// 18.
function returnLastChar(string) {
  return string[string.length - 1];
}
console.log(returnLastChar("apple"));

// 19.
function isEmpty(string) {
  return string.length === 0 ? true : false;
}
console.log(isEmpty(""));
console.log(isEmpty("banana"));

// 20.
function returnPortionOfString(string, index) {
  return string.slice(index);
}
console.log(returnPortionOfString("avocado", 3));
