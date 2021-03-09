const add = require('./adds')
const view = require('./views')
const update = require('./updates')
const remove = require('./removes')
const loader = require('./');
const { prompt } = require("inquirer")

exports.loadMainPrompts = async () => {
        const { choice } = await prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: [
            {
              name: "View All Employees",
              value: "VIEW_EMPLOYEES"
            },
            {
              name: "View All Employees By Department",
              value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
            },
            {
              name: "View All Employees By Manager",
              value: "VIEW_EMPLOYEES_BY_MANAGER"
            },
            {
              name: "Add Employee",
              value: "ADD_EMPLOYEE"
            },
            {
              name: "Remove Employee",
              value: "REMOVE_EMPLOYEE"
            },
            {
              name: "Update Employee Role",
              value: "UPDATE_EMPLOYEE_ROLE"
            },
            {
              name: "Update Employee Manager",
              value: "UPDATE_EMPLOYEE_MANAGER"
            },
            {
              name: "View All Roles",
              value: "VIEW_ROLES"
            },
            {
              name: "Add Role",
              value: "ADD_ROLE"
            },
            {
              name: "Remove Role",
              value: "REMOVE_ROLE"
            },
            {
              name: "View All Departments",
              value: "VIEW_DEPARTMENTS"
            },
            {
              name: "Add Department",
              value: "ADD_DEPARTMENT"
            },
            {
              name: "Remove Department",
              value: "REMOVE_DEPARTMENT"
            },
            {
              name: "Quit",
              value: "QUIT"
            }
          ]
        }
      ]).catch(error => console.error(error));

      switch (choice) {
        case "VIEW_EMPLOYEES":
          return view.viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
          return view.viewEmployeesByDepartment();
        case "VIEW_EMPLOYEES_BY_MANAGER":
          return view.viewEmployeesByManager();
        case "ADD_EMPLOYEE":
          return add.addEmployee();
        case "REMOVE_EMPLOYEE":
          return remove.removeEmployee();
        case "UPDATE_EMPLOYEE_ROLE":
          return update.updateEmployeeRole();
        case "UPDATE_EMPLOYEE_MANAGER":
          return update.updateEmployeeManager();
        case "VIEW_DEPARTMENTS":
          return view.viewDepartments();
        case "ADD_DEPARTMENT":
          return add.addDepartment();
        case "REMOVE_DEPARTMENT":
          return remove.removeDepartment();
        case "VIEW_ROLES":
          return view.viewRoles();
        case "ADD_ROLE":
          return add.addRole();
        case "REMOVE_ROLE":
          return remove.removeRole();
        default:
          return loader.quit();
    } 
}

exports.quit = () => {
  console.log("Goodbye!");
  process.exit();
}