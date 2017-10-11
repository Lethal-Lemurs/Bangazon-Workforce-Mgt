'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployees } = require('../controllers/employee-ctrl');

// When the request is a GET on the employees route, call get employees
router.get('/employees', getEmployees);

module.exports = router;