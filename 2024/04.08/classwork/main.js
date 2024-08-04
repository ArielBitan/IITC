let students = [
  { id: "1", name: "omer" },
  { id: "2", name: "avi" },
  { id: "3", name: "gaga" },
];

/*
 TODO:
    1.Write a function that takes an array of objects and a key
    2. Return a new array with the values of given key
*/

function getKeyValues(arr, key) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i][key] + " ";
  }
  return ans;
}
console.log(getKeyValues(students, "name"));
