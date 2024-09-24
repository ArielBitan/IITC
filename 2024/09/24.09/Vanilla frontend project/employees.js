import { utils } from "./utils.js";

const employeesList = [
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

function addEmployee(employee) {
  employeesList.push(employee);
}

function removeEmployee() {}

export const employees = {
  getEmployees,
  addEmployee,
  removeEmployee,
};
