'use strict';

const { Router } = require('express');
const router = Router();

const { getComputers, postComputer, displayNewComputerForm } = require('../controllers/computer-ctrl');

// When the request is a GET on the computers route, call get Computers
router.get('/computers', getComputers);
router.get('/postComputer', displayNewComputerForm);
router.post('/postComputer', postComputer);

module.exports = router;
