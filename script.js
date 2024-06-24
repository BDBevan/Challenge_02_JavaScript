// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

  // TODO: Get user input to create and return an array of employee objects
  // The following creates a collect employees function with an emtpy employees list (Array) and also sets a continue adding variable to be true for the loop.
  const collectEmployees = function () {
    const employees = [];
    let continueAdding = true;

// The following is the loop that collects employee information using variables and adds them to the table while continueAdding is true.
// Note that there is error detection using && and !isNAN for empty fields and non-numerical
  while (continueAdding) {
    const firstName = prompt("please enter first name");
    const lastName = prompt("Please enter last name");
    const salary = parseFloat (prompt("Enter salary"));

    if (firstName && lastName && !isNaN(salary)) {
      employees.push({ firstName, lastName, salary });
      
  } else { 
    alert('Invalid input');

   }

   continueAdding = confirm('Do you want to add another?');
  }

  return employees;

};

// Display the average salary
// The following creates a function to display the average salary of all the employees in the array.
// It calculates the total salary of all employees within the array and then divides them by the number of employees within the array.
// It then displayes the number of employees based on the array and the average salary to the console. 
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average salary our ${employeesArray.length} employees is: ${averageSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`);
};

// Select a random employee
//The following creates a function to display a random employee. 
// It selects a random index from the array and displays the variable value with message to the console 
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Huge congratulations to: ${randomEmployee.firstName} ${randomEmployee.lastName} our random winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
