// //2.
// console.log(person.name);
// console.log(person.age);

// //3.
// person.isStudent = false;
// console.log(person.isStudent);

let car = {
  make: "Honda",
  model: "4x4",
  year: 2014,
  printDetails: function () {
    //console.log(car.make, car.model, car.year);
  },
};
car.color = "blue";
//car.printDetails();
let carKeys = Object.keys(car);
for (let i = 1; i < carKeys.length; i++) {
  if (carKeys[i] !== "printDetails")
    console.log(`${carKeys[i]} : ${car[carKeys[i]]}`);
}

let person = {
  name: "Ariel",
  age: 22,
  isStudent: true,
  changeName: (name) => {
    person.name = name;
  },
};
console.log(person.name);
person.changeName("David");
console.log(person.name);

let personKeys = Object.keys(person);
console.log(personKeys);
