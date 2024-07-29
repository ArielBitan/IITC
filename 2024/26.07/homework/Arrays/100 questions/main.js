// 1.
let fruits = [];

// 2.
let numbers = [1, 2, 3, 4, 5];

// 3.
let colors = ["red", "green", "blue"];

// 4.
let mixed = [5, "hello", true];

// 5.
let seasons = ["fall", "winter", "spring", "summer"];

// array length
// 6.
console.log(numbers.length);

//7.
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log("empty array");
}

//8.
let dynamic = [3, 2, 5, 6, 1];
console.log(dynamic.length);

// 9.
dynamic.push(5);
console.log(dynamic.length);

// 10.
dynamic.pop();
console.log(dynamic.length);

// accessing elements
// 11.
console.log(colors[0]);

//12.
console.log(seasons[seasons.length - 1]);

// 13.
console.log(numbers[Math.floor(numbers.length / 2)]);

//14.
console.log(fruits[6]);

// 15.
console.log(`the second color is ${colors[1]}`);

// modifying elements
// 16.
fruits[0] = "apple";
console.log(fruits);

// 17.
numbers[numbers.length - 1] = 10;
console.log(numbers);

// 18.
numbers[2] *= 2;
console.log(numbers);

// 19.
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);

// 20.
let temp = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = temp;
console.log(seasons);

// array methods push and pop
// 21.
fruits.push("orange");
console.log(fruits);

// 22.
console.log(numbers.pop());

// 23.
colors.push("grey", "black", "white");
console.log(colors);

// 24.
let arr1 = [];
for (let i = 1; i <= 5; i++) {
  arr1.push(i);
}
console.log(arr1);

// 25.
while (arr1.length > 0) {
  console.log(arr1.pop());
}

// shift and unshift
// 26.
fruits.unshift("mango");
console.log(fruits);

// 27.
console.log(fruits.shift());

// 28.
numbers.unshift(1, 3, 5);
console.log(numbers);

// 29,
let arr2 = [];
for (let i = 5; i >= 1; i--) {
  arr2.unshift(i);
}
console.log(arr2);

// 30.
while (arr2.length > 0) {
  console.log(arr2.shift());
}

// indexOf and lastIndexOf
// 31.
colors = colors.map(lowerCase);
console.log(colors);
function lowerCase(name) {
  name = name.toLowerCase();
  return name;
}
console.log(colors.indexOf("green"));

// 32.
console.log(seasons.indexOf("winter"));

// 33.
colors.push("red");
console.log(colors.lastIndexOf("red"));

// 34.
let arr3 = [2, 3, 5, 6, 2];
console.log(arr3.indexOf(2));
console.log(arr3.lastIndexOf(2));

// 35.
console.log(arr3.indexOf(10) === -1 ? false : true);

// includes()
// 36.
console.log(fruits.includes("apple"));

// 37.
console.log(numbers.includes(10));

// 38.
console.log(colors.includes("blue", Math.floor(colors.length / 2)));
colors.push("blue");
console.log(colors.includes("blue", Math.floor(colors.length / 2)));

// 39.
function hasValue(arr, value) {
  return arr.includes(value);
}

// 40.
if (colors.includes("green")) {
  console.log("has green");
} else if (colors.includes("blue")) {
  console.log("has blue");
} else {
  console.log("doesnt have green/blue");
}

// slice()
// 41.
console.log(numbers);
let slicedNums = numbers.slice(0, 3);
console.log(slicedNums);

// 42.
console.log(colors);
console.log(colors.slice(colors.length - 2, colors.length));

// 43.
console.log(seasons.slice(2, 5));

// 44.
let arr4 = numbers.slice();
console.log(arr4);

// 45.
console.log(arr4.slice(Math.floor(arr4.length / 2)));

// splice
// 46.
fruits.push("banana", "mango", "watermelon", "kiwi");
console.log(fruits);
fruits.splice(Math.floor(fruits.length / 2), 2);
console.log(fruits);

// 47.
console.log(numbers);
numbers.splice(2, 1, 9);
console.log(numbers);

// 48.
colors.splice(1, 0, "yellow", "orange", "pink");
console.log(colors);

// 49.
console.log(numbers);
numbers.splice(0, 1, 7, 7);
console.log(numbers);

// 50.
console.log(arr4);
arr4.splice(0, arr4.length);
console.log(arr4);

// concat()
// 51.
let fruitsNColors = fruits.concat(colors);
console.log(fruitsNColors);

// 52.
console.log(arr1, arr2, arr3);
let nums = arr1.concat(arr2, arr3);

console.log(nums);

// 53.
nums = arr3.concat(3, 5);

console.log(nums);

// 54.
nums = nums.concat(nums);
console.log(nums);

// 55.
nums = nums.concat(3, 5, 6);
console.log(nums);

// join()
// 56.
console.log(fruits.join(","));

//57.
console.log(numbers.join("-"));

// 58.
function joinArr(arr, separator) {
  return arr.join(separator);
}
console.log(joinArr(numbers, ":"));

// 59.
console.log(colors.join(""));

// 60.
let sentence = "hello my name is ariel";
sentence = sentence.split(" ");
console.log(sentence);
sentence = sentence.reverse();
console.log(sentence);
console.log(sentence.join(" "));

// reverse()
// 61.
console.log(seasons);
console.log(seasons.reverse());

// 62.
function isPalindrome(word) {
  let myWord = word.split("");
  myWord = myWord.reverse();
  myWord = myWord.join("");
  if (myWord === word) {
    return true;
  }
  return false;
}
console.log(isPalindrome("pop"));
console.log(isPalindrome("year"));

// 63.
console.log(numbers);
console.log(numbers.reverse().map(squareNumbers));
function squareNumbers(value) {
  return value * value;
}

// 64.
let string = "hello";
console.log(string.split("").reverse().join(""));

// 65.
let arrTest = [1, 2, 3, 4, 5];
function reverseArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - 1 - i];
  }
  return newArr;
}
console.log(reverseArr(arrTest));

// sort()
// 66.
console.log(fruits);
fruits.sort();
console.log(fruits);

// 67.
console.log(numbers);
numbers.sort(isBigger);
console.log(numbers);
function isBigger(a, b) {
  return a - b;
}

//68.
numbers.sort(isLower);
function isLower(a, b) {
  return b - a;
}
console.log(numbers);

// 69.
console.log(fruits);
fruits.sort(function byLength(name1, name2) {
  return name1.length - name2.length;
});
console.log(fruits);

// 70.
console.log(numbers);
numbers.sort(function byRemainder(num1, num2) {
  return (num1 % 3) - (num2 % 3);
});
console.log(numbers);

// foreach()
// 71.
colors.forEach(function callName(name) {
  console.log(name);
});

// 72.
console.log(numbers);
numbers.forEach(function doubleNumbers(number, index, arr) {
  arr[index] = number * 2;
});
console.log(numbers);

//74.
function findItem(arr, number) {
  arr.forEach(function findIndex(num, index) {
    if (number === num) {
      return console.log(index);
    }
  });
}
findItem(numbers, 12);
console.log(numbers);

// 81.,
numbers.push(1, 3, 5, 7);
console.log(numbers);

let arr7 = numbers.filter(function evenNumbers(num) {
  return num % 2 === 0;
});
console.log(arr7);

// 82.

console.log(
  fruits.filter(function (name) {
    return name.length > 5;
  })
);

// 83.
numbers.push(5, 5, 5, 5);
console.log(numbers);
function getUnique(arr) {
  return arr.filter(function (num, index, arr) {
    return arr.indexOf(num) === index;
  });
}

console.log(getUnique(numbers));

// 84.
numbers.push(0, 0, 0);
console.log(numbers);
console.log(
  numbers.filter(function (value) {
    return value != false;
  })
);

// 85.
console.log(
  fruits.filter(function (value) {
    return value.includes("an");
  })
);

// 86.
console.log(
  numbers.find(function (value) {
    return value > 3;
  })
);

// 87.
console.log(colors);
console.log(
  colors.findIndex(function (value) {
    return value.startsWith("b");
  })
);

// 88.
function firstPrimeNumber(arr) {
  return arr.find(function (value) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0 && value !== 2) {
        return false;
      }
    }
    return true;
  });
}
console.log(firstPrimeNumber(numbers));
numbers.unshift(7);

console.log(numbers);
console.log(firstPrimeNumber(numbers));

// 89.
console.log(
  seasons.findIndex(function (value) {
    return value === "winter";
  })
);

// 90.
function findDivisibleByFour(arr) {
  return arr.find(function (value) {
    return value % 4 === 0;
  });
}
console.log(findDivisibleByFour(numbers));

// some()
// 91.
console.log(
  numbers.some(function (value) {
    return value % 2 === 0;
  })
);

// 92.
console.log(fruits);
console.log(
  fruits.every(function (value) {
    return value.length > 3;
  })
);

// 93.
console.log(
  numbers.some(function (value) {
    return value < 0;
  })
);
numbers.push(-5);
console.log(
  numbers.some(function (value) {
    return value < 0;
  })
);

// 94.
function uniqueElement(arr) {
  return arr.every(function (value, index, arr) {
    console.log(value, index, arr.indexOf(value));
    return index === arr.indexOf(value);
  });
}
console.log(numbers);
console.log(uniqueElement(numbers));

//95.
function divisibleByThreeAndHasZero(arr) {
  if (
    arr.every(function (value) {
      return value % 3 === 0;
    }) &&
    arr.some(function (value) {
      return value === 0;
    })
  ) {
    console.log("every element is divisible by 3 and the array contains 0");
  } else {
    console.log("one of the conditions wasnt met");
  }
}
divisibleByThreeAndHasZero([15, 30, 45, 0]);
divisibleByThreeAndHasZero([15, 30, 45]);
