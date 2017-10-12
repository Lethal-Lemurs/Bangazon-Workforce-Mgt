'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployees, getOneEmployee } = require('../controllers/employee-ctrl');

// When the request is a GET on the employees route, call get employees
router.get('/employees', getEmployees);
router.get('/employees/:id', getOneEmployee);


module.exports = router;