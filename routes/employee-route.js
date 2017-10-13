'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployees, getOneEmployee, displayNewEmployeeForm, postEmployee, editOneEmployee } = require('../controllers/employee-ctrl');

// When the request is a GET on the employees route, call get employees
router.get('/employees', getEmployees);
router.get('/employees-details/:id', getOneEmployee);
router.get('/employees-details/:id', displayNewEmployeeForm);
router.put('/employees-details/:id', editOneEmployee);
router.get('/postEmployee', displayNewEmployeeForm);
router.post('/postEmployee', postEmployee);

module.exports = router;