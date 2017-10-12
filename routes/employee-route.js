'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployees, getOneEmployee, editOneEmployee } = require('../controllers/employee-ctrl');

// When the request is a GET on the employees route, call get employees
router.get('/employees', getEmployees);
router.get('/employees-details/:id', getOneEmployee);
router.post('/employees-details/:id', editOneEmployee);
// router.get('/employees-details:id', );


module.exports = router;