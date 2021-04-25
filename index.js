"use strict";

const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const promptMessages = {
  viewAllEmployees: "View All Employees",
  viewByDepartment: "View All Employees by Department",
  viewByManager: "View all Employees by Manager",
  addEmployee: "Add an Employee",
  removeEmployee: "Remove an Employee",
  updateRole: "Update an Employees Role",
  updateEmployeeManager: "Update an Employees Manager",
  viewAllRoles: "View all Employee Roles",
  exit: "exit",
};

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "employees",
});

function prompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What Do you need to do?",
      choices: [
        promptMessages.viewAllEmployees,
        promptMessages.viewByDepartment,
        promptMessages.viewByManager,
        promptMessages.viewAllRoles,
        promptMessages.addEmployee,
        prompt.messages.removeEmployee,
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
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (role.id = employee.role_id)
  INNER JOIN department ON (department.id = role.department_id)
  ORDER BY employee.id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW ALL EMPLOYEES");
    console.log("\n");
    console.table(res);
    prompt();
  });
}

function viewByManager() {
  const query = `SELECT CONCAT(manager.first_name, ' ', manager.last_name) AS manager, department.name AS department, employee.id, employee.first_name, employee.last_name, role.title
  FROM employee
  LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (role.id = employee.role_id && employee.manager_id != 'NULL')
  INNER JOIN department ON (department.id = role.department_id)
  ORDER BY manager;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW EMPLOYEE BY MANAGER");
    console.log("\n");
    console.table(res);
    prompt();
  });
}
