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
    ans.push(arr[i][key]);
  }
  return ans;
}
console.log(getKeyValues(students, "name"));

function createPersons(names) {
  let persons = [];
  for (let i = 0; i < names.length; i++) {
    let person = {};
    person.id = i;
    person.name = names[i];
    persons.push(person);
  }
  return persons;
}
console.log(createPersons(["yossi", "liraz", "baba"]));
/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(arr, property) {
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    if (!ans[arr[i][property]]) {
      ans[arr[i][property]] = [];
    }
    ans[arr[i][property]].push(arr[i]);
  }
  return ans;
}

console.log(groupBy(employees, "department"));

/*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */
