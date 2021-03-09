const loader = require('./loaders')
const db = require('../data/index')
const { prompt } = require("inquirer");

exports.updateEmployeeRole = async function () {
    const employees = await db.findAllEmployees();
  
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
  
    const { employeeId } = await prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's role do you want to update?",
        choices: employeeChoices
      }
    ]);
  
    const roles = await db.findAllRoles();
  
    const roleChoices = roles.map(({ id, title }) => ({
      name: title,
      value: id
    }));
  
    const { roleId } = await prompt([
      {
        type: "list",
        name: "roleId",
        message: "Which role do you want to assign the selected employee?",
        choices: roleChoices
      }
    ]);
  
    await db.updateEmployeeRole(employeeId, roleId);
  
    console.log("Updated employee's role");
  
    loader.loadMainPrompts();
  }

  exports.updateEmployeeManager = async function () {
    const employees = await db.findAllEmployees();
  
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
  
    const { employeeId } = await prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's manager do you want to update?",
        choices: employeeChoices
      }
    ]);
  
    const managers = await db.findAllPossibleManagers(employeeId);
  
    const managerChoices = managers.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
  
    const { managerId } = await prompt([
      {
        type: "list",
        name: "managerId",
        message:
          "Which employee do you want to set as manager for the selected employee?",
        choices: managerChoices
      }
    ]);
  
    await db.updateEmployeeManager(employeeId, managerId);
  
    console.log("Updated employee's manager");
  
    loader.loadMainPrompts();
  }