// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  let employeesArray = [];

  // Loop to collect multiple employees until user cancels
  let collecting = true;
  let employeeIndex = 1;

  while (collecting) {
    let firstName = prompt(`Enter first name for employee ${employeeIndex}:`);
    let lastName = prompt(`Enter last name for employee ${employeeIndex}:`);
    let salary = parseFloat(prompt(`Enter salary for employee ${employeeIndex}:`));

    // Create an employee object
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // Add employee object to array
    employeesArray.push(employee);

    // Ask user if they want to add another employee
    collecting = confirm('Do you want to add another employee?');
    employeeIndex++;
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    let totalSalary = 0;
  
    // Calculate the total salary
    employeesArray.forEach(employee => {
      totalSalary += employee.salary;
    });
  
    // Calculate average salary
    let averageSalary = totalSalary / employeesArray.length;
  
    // Determine if any salary has decimal places
    let hasDecimal = employeesArray.some(employee => {
      return employee.salary % 1 !== 0;
    });
  
    // Display Average Salary based on whether there are decimals or not
    if (hasDecimal) {
      console.log(`The average employee salary between our employee(s) is $${averageSalary.toFixed(2)}`);
    } else {
      console.log(`The average employee salary between our employee(s) is $${averageSalary.toFixed(0)}`);
    }
  };

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];

  // Display random employee winner message
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = ''; // Clear existing table content

  employeesArray.forEach(employee => {
    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = employee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = employee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement('td');
    salaryCell.textContent = employee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
  });
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
