import { utils } from "./utils.js";

let employeesList = [
  {
    id: utils.makeId(),
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    startDate: "2020-06-15",
    department: "Marketing",
    salary: 50000,
  },
  {
    id: utils.makeId(),
    firstName: "John",
    lastName: "Doe",
    age: 35,
    startDate: "2018-01-25",
    department: "Sales",
    salary: 60000,
  },
  {
    id: utils.makeId(),
    firstName: "Emma",
    lastName: "Johnson",
    age: 42,
    startDate: "2015-03-12",
    department: "IT",
    salary: 70000,
  },
  {
    id: utils.makeId(),
    firstName: "Michael",
    lastName: "Brown",
    age: 30,
    startDate: "2019-07-01",
    department: "Finance",
    salary: 55000,
  },
  {
    id: utils.makeId(),
    firstName: "Sophia",
    lastName: "Williams",
    age: 26,
    startDate: "2021-05-20",
    department: "HR",
    salary: 45000,
  },
];

function getEmployees() {
  return [...employeesList];
}

// add id to the updated employee ,
// then find the index of the employee that needs to be updated and put the updated employee instead of him
function editEmployee(employee, updatedEmployee) {
  let editedEmployee = { id: employee.id, ...updatedEmployee };
  const employeeIndex = employeesList.findIndex(
    (element) => element.id === employee.id
  );
  employeesList.splice(employeeIndex, 1, editedEmployee);
}

// add id to the received object and add it to the database
function addEmployee(employee) {
  let newEmployee = { id: utils.makeId(), ...employee };
  employeesList.push(newEmployee);
  console.log(employeesList);
}

// receive an object and splice it after finding index
function removeEmployee(employee) {
  const employeeIndex = employeesList.findIndex(
    (element) => element.id === employee.id
  );
  employeesList.splice(employeeIndex, 1);
}

export const employees = {
  getEmployees,
  addEmployee,
  editEmployee,
  removeEmployee,
};
