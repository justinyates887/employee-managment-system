const db = require('../data/index');
const loader = require('./loaders');
require('console.table');
const { prompt } = require("inquirer");

exports.viewEmployees = async function () {
    const employees = await db.findAllEmployees();
  
    console.log("\n");
    console.table(employees);
  
    loader.loadMainPrompts();
}

exports.viewEmployeesByDepartment = async function () {
    const departments = await db.findAllDepartments();
  
    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id
    }));
  
    const { departmentId } = await prompt([
      {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to see employees for?",
        choices: departmentChoices
      }
    ]);
  
    const employees = await db.findAllEmployeesByDepartment(departmentId);
  
    console.log("\n");
    console.table(employees);
  
    loader.loadMainPrompts();
}

exports.viewEmployeesByManager = async function () {
    const managers = await db.findAllEmployees();
  
    const managerChoices = managers.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
  
    const { managerId } = await prompt([
      {
        type: "list",
        name: "managerId",
        message: "Which employee do you want to see direct reports for?",
        choices: managerChoices
      }
    ]);
  
    const employees = await db.findAllEmployeesByManager(managerId);
  
    console.log("\n");
  
    if (employees.length === 0) {
      console.log("The selected employee has no direct reports");
    } else {
      console.table(employees);
    }
  
    loader.loadMainPrompts();
  }

exports.viewRoles = async function () {
    const roles = await db.findAllRoles();
  
    console.log("\n");
    console.table(roles);
  
    loader.loadMainPrompts();
  }

exports.viewDepartment = async function () {
    const departments = await db.findAllDepartments();
  
    console.log("\n");
    console.table(departments);
  
    loader.loadMainPrompts();
  }

