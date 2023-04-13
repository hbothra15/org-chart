const cors = require('cors')
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const allEmployee = require('./employees.json')

function buildHierarchy(employees) {
  let map = {}; // Map each employee's id to their object
  let roots = []; // Array to hold the root level employees (those without a manager)

  // First, map each employee's id to their object
  employees.forEach(employee => {
    employee.children = []; // Initialize an empty children array for each employee
    map[employee.id] = employee;
  });

  // Second, for each employee, add them to their manager's children array
  employees.forEach(employee => {
    if (employee.manager_id) {
      let manager = map[employee.manager_id];
      if (manager !== undefined) {
        manager.children.push(employee);
      }
    } else {
      roots.push(employee); // Employee has no manager, so add to root level
    }
  });
  // Finally, return the root level employees
  return roots;
}

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json(allEmployee);
})

app.get('/tree', (req,res) => {
  res.json(buildHierarchy(allEmployee));
})

app.get('/:userName', (req, res) => {
  const userName = req.params.userName;
  const employee = allEmployee.find(emp => emp.username === userName);
  if(employee)
    res.json(employee);
  else res.status(404).send('Employee not found');
})

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))