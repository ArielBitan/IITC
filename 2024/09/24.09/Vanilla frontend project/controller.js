import { employees } from "./employees.js";

renderEmployeesList();

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("submit", function (ev) {
  ev.preventDefault();
  employees.addEmployee(ev.target);
});

function renderEmployeesList() {
  const elEmployeesTable = document.getElementById("employeesTable");
  const employeesList = employees.getEmployees();

  for (let i = 0; i < employeesList.length; i++) {
    let totalRowIndex = elEmployeesTable.rows.length;
    let newRow = elEmployeesTable.insertRow(totalRowIndex);
    newRow.setAttribute("id", "row-" + employeesList[i].id);

    const currentEmployee = employeesList[i];

    for (let j = 0; j < Object.values(currentEmployee).length; j++) {
      const employeeKeys = Object.values(currentEmployee);
      newRow.insertCell().innerHTML = employeeKeys[j];
    }

    let removeBtn;
    removeBtn = document.createElement("BUTTON");
    removeBtn.className = "remove-btn";
    removeBtn.innerHTML = "Remove Employee";
    removeBtn.addEventListener("click", function () {
      removeItem(newRow.id);
    });
    let removeProduct = newRow.insertCell(currentEmployee.length);
    removeProduct.appendChild(removeBtn);
  }
}
