// 1.
const arr = [1, 2, 3, 4, 5];
const newArray = [...arr];
console.log(newArray);

// 2.
const arr2 = [...arr, ...newArray];
console.log(arr2);

//3.
const arr3 = [22, ...arr];
console.log(arr3);

//4.
const arr4 = [...arr, 33];
console.log(arr4);

//5.
const arr5 = [...arr, ...arr2, ...arr3];
console.log(arr5);

//6.
const newElement = 5;
const arr6 = [...arr, newElement];
console.log(arr6);

// 7.
const arr7 = [...arr.slice(1)];
console.log(arr7);

// 8.
const arr8 = [...arr.slice(-3)];
console.log(arr8);

// 9.
const arr9 = [...arr.reverse()];
console.log(arr9);

// 10.
const arr10 = [arr[0], 63, ...arr.slice(2)];
console.log(arr10);

// 11.
const str = "hello";
const chars = [...str];
console.log(chars);

// 12.
const nestedArr = [arr2, arr];
console.log(nestedArr);

const spreadArr = [...nestedArr[0], ...nestedArr[1]];
console.log(spreadArr);

//13.
const arr11 = [...spreadArr.slice(0, -1)];
console.log(arr11);

// 14.
