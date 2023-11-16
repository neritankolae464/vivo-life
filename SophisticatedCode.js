/* 
   Filename: SophisticatedCode.js
   Description: This code is a sophisticated and elaborate example that demonstrates various concepts in JavaScript, 
                including object-oriented programming, closures, higher-order functions, and asynchronous programming. 
                It also showcases a practical use case of managing employee information and salaries.
*/

// Employee Class
class Employee {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  getSalary() {
    throw new Error("This method must be implemented by subclasses.");
  }

  toString() {
    return `Employee Name: ${this.name}, Age: ${this.age}, Experience: ${this.experience}`;
  }
}

// Manager Class - Subclass of Employee
class Manager extends Employee {
  getSalary() {
    return 10000 + this.experience * 1000;
  }

  toString() {
    return `${super.toString()}, Salary: ${this.getSalary()}`;
  }
}

// Engineer Class - Subclass of Employee
class Engineer extends Employee {
  getSalary() {
    return 5000 + this.experience * 500;
  }

  toString() {
    return `${super.toString()}, Salary: ${this.getSalary()}`;
  }
}

// HR Class
class HR {
  constructor() {
    this.employees = [];
  }

  hireEmployee(employee) {
    this.employees.push(employee);
    console.log(`Hired new employee: ${employee.name}`);
  }

  fireEmployee(employee) {
    const index = this.employees.findIndex(emp => emp.name === employee.name);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log(`Fired employee: ${employee.name}`);
    } else {
      console.log(`Employee ${employee.name} not found.`);
    }
  }

  calculateTotalSalaries() {
    return this.employees.reduce((total, emp) => total + emp.getSalary(), 0);
  }
}

// Create HR instance
const hr = new HR();

// Create and hire employees
const employee1 = new Engineer("John Doe", 30, 5);
hr.hireEmployee(employee1);

const employee2 = new Manager("Jane Smith", 35, 10);
hr.hireEmployee(employee2);

// Calculate total salaries
const totalSalaries = hr.calculateTotalSalaries();
console.log("Total Salaries: ", totalSalaries);

// Fire an employee
hr.fireEmployee(employee1);

// Calculate total salaries after firing
const newTotalSalaries = hr.calculateTotalSalaries();
console.log("Total Salaries after firing: ", newTotalSalaries);

// Output employee information
console.log(employee1.toString());
console.log(employee2.toString());

// Output HR employees
console.log(hr.employees.map(emp => emp.name));

// Import external JSON data
const fetch = require("node-fetch");

async function fetchData() {
  const response = await fetch("https://api.example.com/employees");
  const data = await response.json();
  console.log("Fetched data:", data);
}

fetchData().catch(err => console.error(err));
