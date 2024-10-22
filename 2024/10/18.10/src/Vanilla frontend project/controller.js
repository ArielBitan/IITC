import { employees } from "./employees.js";

const gSubmitForm = document.getElementById("form");
renderEmployeesList();
addEventListeners();

function addEventListeners() {
  document
    .querySelector("#selectFilter")
    .addEventListener("change", function () {
      const selectedFilterType = this.value;
      const filterInput = document.getElementById("filterInput");
      filterInput.setAttribute("placeholder", `Enter ${this.value}`);
      filterInput.removeEventListener("input", function () {
        renderEmployeesList(filterInput.value, selectedFilterType);
      });

      if (this.value === "all") {
        filterInput.value = "";
        renderEmployeesList("", "all");
        return;
      }

      filterInput.addEventListener("input", function () {
        renderEmployeesList(filterInput.value, selectedFilterType);
      });
    });

  gSubmitForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const formData = {};
    Array.from(ev.target.elements).forEach(function (element) {
      if (element.name) {
        formData[element.name] = element.value;
      }
    });
    employees.addEmployee(formData);
    renderEmployeesList();
    gSubmitForm.reset();
  });
}

function renderEmployeesList(filterInput = "", filterType = "all") {
  const elEmployeesTable = document.getElementById("employeesTable");
  const employeesList = employees.getEmployees();

  // clear table except header
  while (elEmployeesTable.rows.length > 1) {
    elEmployeesTable.deleteRow(1);
  }

  for (let i = 0; i < employeesList.length; i++) {
    const currentEmployee = employeesList[i];
    console.log(currentEmployee);

    // if no filter was selected / filter was selected and employee passes the test render it
    if (
      filterType === "all" ||
      currentEmployee[filterType]
        .toLowerCase()
        .includes(filterInput.toLowerCase())
    ) {
      let newRow = elEmployeesTable.insertRow();
      newRow.setAttribute("id", "row-" + currentEmployee.id);

      const employeeValues = Object.values(currentEmployee);

      for (let j = 1; j < employeeValues.length; j++) {
        newRow.insertCell().innerHTML = employeeValues[j];
      }

      addInteractButtons(newRow, currentEmployee);
    }
  }
}

function addInteractButtons(newRow, currentEmployee) {
  addEditButton(newRow, currentEmployee);
  addRemoveButton(newRow, currentEmployee);
}

// edit button ui and functionality
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
      for (let i = 0; i < gSubmitForm.elements.length - 1; i++) {
        const input = document.createElement("INPUT");
        input.setAttribute("type", gSubmitForm.elements[i].type || "text");
        input.setAttribute("name", gSubmitForm.elements[i].name);
        input.value = employeeValues[i + 1];

        input.classList.add("edit-input");

        let editValueCell = editRow.insertCell();
        editValueCell.appendChild(input);
      }

      editBtn.innerHTML = "Save";
    } else {
      // entering else means there is an edit row open meaning the user clicked the 'save' button
      const inputs = editRow.querySelectorAll(".edit-input");

      // make a new object and insert all the inputs given
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

// remove button ui and functionality
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
