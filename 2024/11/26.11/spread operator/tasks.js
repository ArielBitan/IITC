// // 1.
// const arr = [1, 2, 3, 4, 5];
// const newArray = [...arr];
// console.log(newArray);

// // 2.
// const arr2 = [...arr, ...newArray];
// console.log(arr2);

// //3.
// const arr3 = [22, ...arr];
// console.log(arr3);

// //4.
// const arr4 = [...arr, 33];
// console.log(arr4);

// //5.
// const arr5 = [...arr, ...arr2, ...arr3];
// console.log(arr5);

// //6.
// const newElement = 5;
// const arr6 = [...arr, newElement];
// console.log(arr6);

// // 7.
// const arr7 = [...arr.slice(1)];
// console.log(arr7);

// // 8.
// const arr8 = [...arr.slice(-3)];
// console.log(arr8);

// // 9.
// const arr9 = [...arr.reverse()];
// console.log(arr9);

// // 10.
// const arr10 = [arr[0], 63, ...arr.slice(2)];
// console.log(arr10);

// // 11.
// const str = "hello";
// const chars = [...str];
// console.log(chars);

// // 12.
// const nestedArr = [arr2, arr];
// console.log(nestedArr);

// const spreadArr = [...nestedArr[0], ...nestedArr[1]];
// console.log(spreadArr);

// //13.
// const arr11 = [...spreadArr.slice(0, -1)];
// console.log(arr11);

// // 14.
// let arr12 = [...arr11.slice(0, 2), newElement, ...arr11.slice(2)];
// console.log(arr12);

// // 15.
// const uniqueArr = new Set(arr12);
// arr12 = [...uniqueArr];
// console.log(arr12);

// // 16.
// const arr13 = [...arr11.slice(1, -1)];
// console.log(arr13);

// // 17.
// const arr14 = [...arr13.slice(1), arr13[0]];
// console.log(arr14);

// // 18.
// const arr15 = ["Hello", ...arr14];
// console.log(arr15);

// // 19
// function mergeArrays(...args) {
//   return [].concat(...args);
// }
// console.log(mergeArrays(arr11, arr12, arr13));

// // 20
// const arr16 = [...arr15].sort(() => Math.random() - 0.5);
// console.log(arr16);

// objects
//1.
const person = {
  name: "nanme",
  age: "age",
};
const person2 = { ...person };
console.log(person2);

// 2.
const dog = {
  type: "dog",
  breed: "dog",
};
const persons = { ...person, ...dog };
console.log(persons);

// 3.
const updatedPersons = {
  ...persons,
  breed: "new breed",
};
console.log(updatedPersons);

//4.
const newProp = {
  ...updatedPersons,
  property: "new",
};
console.log(newProp);

// 5.
const megaObject = {
  ...person,
  ...person2,
  ...newProp,
};
console.log(megaObject);

// 6.
// same as 1

// 7.
const { name, ...rest } = person;
console.log(rest);

//8,
const swappedObject = { ...newProp, name: newProp.age, age: newProp.name };
console.log(swappedObject);

// 9.
// same as 7

// 10.
const object = {
  name: "name",
  nestedObject: {
    age: 18,
    happy: true,
  },
};

const replacedObject = {
  ...object,
  nestedObject: {
    ...object.nestedObject,
    age: 15,
  },
};
console.log(replacedObject);

// 11
function mergeObjects(...args) {
  return Object.assign({}, ...args);
}

console.log(mergeObjects(replacedObject, person));

// 12.
// same as 2

// 13.
const person3 = {
  ...person,
  nestedObject: {
    word: "word",
    word2: "word2",
  },
};
console.log(person3);

// 14.
const { age, ...rest1 } = person;
console.log(person);

console.log(rest1);

// 15.
const object3 = { a: 1, b: null, c: 3, d: undefined };

const cleanedObj = Object.entries(object3)
  .filter(([key, value]) => value !== null && value !== undefined)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

console.log(cleanedObj);

// 16.
const defaultSettings = {
  setting: "setting",
  setting2: "setting2",
  setting3: "setting3",
};
const configuration = {
  setting: "setting",
  setting2: "setting5",
};
const combinedSetting = { ...defaultSettings, ...configuration };
console.log(combinedSetting);

// 17.
const { setting, ...rest3 } = {
  ...defaultSettings,
  ...configuration,
};
console.log(rest3);

// 18.
// same as exercise 10

// 19.
const keyVal = [
  ["a", 5],
  ["b", 7],
  ["c", 3],
];

const obj5 = Object.fromEntries(keyVal);
console.log(obj5);

// 20.
const userDetails = {
  name: "asd",
  password: "assd",
};
const preferences = {
  theme: "dark",
  scroll: "fast",
};
const combinedObject2 = {
  ...userDetails,
  ...preferences,
  theme: "light",
  name: "dddd",
};
console.log(combinedObject2);
