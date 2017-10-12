'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartments } = require('../controllers/department-ctrl');

router.get('/departments', getDepartments);

module.exports = router;
