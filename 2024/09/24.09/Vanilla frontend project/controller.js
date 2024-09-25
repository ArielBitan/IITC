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
  submitForm.reset();
});

function renderEmployeesList() {
  const elEmployeesTable = document.getElementById("employeesTable");
  const employeesList = employees.getEmployees();
  let count = 0;
  while (elEmployeesTable.rows.length > 1) {
    if (document.querySelector("edit-" + employeesList[count].id)) {
      continue;
    }
    elEmployeesTable.deleteRow(1);
    count++;
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
      const employeeValues = Object.values(currentEmployee);
      newRow.insertCell().innerHTML = employeeValues[j];
    }
    addInteractButtons(newRow, currentEmployee);
  }
}

function addInteractButtons(newRow, currentEmployee) {
  addEditButton(newRow, currentEmployee);
  addRemoveButton(newRow, currentEmployee);
}

function addRemoveButton(newRow, currentEmployee) {
  let removeBtn;
  removeBtn = document.createElement("BUTTON");
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", function () {
    newRow.remove();

    if (document.querySelector(".edit-" + currentEmployee.id)) {
      document.querySelector(".edit-" + currentEmployee.id).remove();
    }

    employees.removeEmployee(currentEmployee);
    renderEmployeesList();
  });

  let removeEmployeeCell = newRow.insertCell(newRow.cells.length);
  removeEmployeeCell.appendChild(removeBtn);
}

function addEditButton(newRow, currentEmployee) {
  let editBtn = null;
  let editRow = null;

  // create edit button
  editBtn = document.createElement("BUTTON");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", function () {
    const elEmployeesTable = document.getElementById("employeesTable");

    // check if there is an existing row already
    if (!editRow) {
      editRow = elEmployeesTable.insertRow(newRow.rowIndex + 1);
      editRow.classList.add("edit-" + currentEmployee.id);

      const employeeValues = Object.values(currentEmployee);

      // get all elements except the submit button
      for (let i = 0; i < submitForm.elements.length - 1; i++) {
        const input = document.createElement("INPUT");
        input.setAttribute("type", submitForm.elements[i].type || "text");
        input.setAttribute("name", submitForm.elements[i].name);
        input.value = employeeValues[i + 1];

        input.classList.add("edit-input");

        let editValueCell = editRow.insertCell();
        editValueCell.appendChild(input);
      }

      editBtn.innerHTML = "Save";
    } else {
      // entering else means there is an edit row open meaning the user clicked the 'save' button
      const inputs = editRow.querySelectorAll(".edit-input");

      const updatedEmployee = {};
      inputs.forEach((input) => {
        updatedEmployee[input.name] = input.value;
      });

      employees.editEmployee(currentEmployee, updatedEmployee);

      editRow.remove();
      editRow = null;
      editBtn.innerHTML = "Edit";

      renderEmployeesList();
    }
  });

  let editEmployeeCell = newRow.insertCell(newRow.cells.length);
  editEmployeeCell.appendChild(editBtn);
}
