import { employees } from "./employees.js";

renderEmployeesList();

const submitForm = document.getElementById("form");
submitForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const formData = {};
  Array.from(ev.target.elements).forEach(function (element) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  });
  employees.addEmployee(formData);
  renderEmployeesList();
});

function renderEmployeesList() {
  const elEmployeesTable = document.getElementById("employeesTable");
  const employeesList = employees.getEmployees();

  while (elEmployeesTable.rows.length > 1) {
    elEmployeesTable.deleteRow(1);
  }

  for (let i = 0; i < employeesList.length; i++) {
    if (document.querySelector("#row-" + employeesList[i].id)) {
      continue;
    }
    let totalRowIndex = elEmployeesTable.rows.length;
    let newRow = elEmployeesTable.insertRow(totalRowIndex);
    newRow.setAttribute("id", "row-" + employeesList[i].id);

    const currentEmployee = employeesList[i];

    for (let j = 1; j < Object.values(currentEmployee).length; j++) {
      const employeeKeys = Object.values(currentEmployee);
      newRow.insertCell().innerHTML = employeeKeys[j];
    }
    addInteractButtons(newRow, currentEmployee);
  }
}

function addInteractButtons(newRow, currentEmployee) {
  let removeBtn;
  removeBtn = document.createElement("BUTTON");
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", function () {
    employees.removeEmployee(currentEmployee);
    renderEmployeesList();
  });
  let removeEmployee = newRow.insertCell(currentEmployee.length);
  removeEmployee.appendChild(removeBtn);

  let editBtn;
  editBtn = document.createElement("BUTTON");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", function () {
    editItem(newRow.id);
  });
  let editEmployee = newRow.insertCell(currentEmployee.length);
  editEmployee.appendChild(editBtn);
}
