import { utils } from "./utils.js";

const EMPLOYEES_STORAGE_KEY = "employees";

let employeesList = utils.getFromStorage(EMPLOYEES_STORAGE_KEY) || [];

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
  utils.saveToStorage(EMPLOYEES_STORAGE_KEY, employeesList);
}

// add id to the received object and add it to the database
function addEmployee(employee) {
  let newEmployee = { id: utils.makeId(), ...employee };
  employeesList.push(newEmployee);
  utils.saveToStorage(EMPLOYEES_STORAGE_KEY, employeesList);
}

// receive an object and splice it after finding index
function removeEmployee(employee) {
  const employeeIndex = employeesList.findIndex(
    (element) => element.id === employee.id
  );
  employeesList.splice(employeeIndex, 1);
  utils.saveToStorage(EMPLOYEES_STORAGE_KEY, employeesList);
}

export const employees = {
  getEmployees,
  addEmployee,
  editEmployee,
  removeEmployee,
};
