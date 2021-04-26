"use strict";

const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const promptMessages = {
  viewAllEmployees: "View All Employees",
  viewByDepartment: "View All Employees By Department",
  viewByManager: "View All Employees By Manager",
  addEmployee: "Add An Employee",
  removeEmployee: "Remove An Employee",
  updateRoles: "Update Employee Role",
  updateEmployeeManager: "Update Employee Manager",
  viewAllRoles: "View All Roles",
  exit: "Exit",
};

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; mine set to 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  // database referenced
  database: "employees",
});

connection.connect((err) => {
  if (err) throw err;
  prompt();
});

function prompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        promptMessages.viewAllEmployees,
        promptMessages.viewByDepartment,
        promptMessages.viewByManager,
        promptMessages.viewAllRoles,
        promptMessages.addEmployee,
        promptMessages.removeEmployee,
        promptMessages.updateRole,
        promptMessages.exit,
      ],
    })
    .then((answer) => {
      console.log("answer", answer);
      switch (answer.action) {
        case promptMessages.viewAllEmployees:
          viewAllEmployees();
          break;

        case promptMessages.viewByDepartment:
          viewByDepartment();
          break;

        case promptMessages.viewByManager:
          viewByManager();
          break;

        case promptMessages.addEmployee:
          addEmployee();
          break;

        case promptMessages.removeEmployee:
          remove("delete");
          break;

        case promptMessages.updateRole:
          remove("role");
          break;

        case promptMessages.viewAllRoles:
          viewAllRoles();
          break;

        case promptMessages.exit:
          connection.end();
          break;
      }
    });
}

function viewAllEmployees() {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department,
  roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (roles.id = employee.roles_id)
  INNER JOIN department ON (department.id = roles.department_id)
  ORDER BY employee.id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("View all employees");
    console.table(res);
    prompt();
  });
}

function viewByDepartment() {
  const query = `SELECT department.name AS department, roles.title, employee.id, employee.first_name, employee.last_name
  FROM employee
  LEFT JOIN roles ON (roles.id = employee.roles_id)
  LEFT JOIN department ON (department.id = roles.department_id)
  ORDER BY department.name;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("VIEW EMPLOYEE BY DEPARTMENT");
    console.table(res);
    prompt();
  });
}
