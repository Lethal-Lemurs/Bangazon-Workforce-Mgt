'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartments, getOneDepartment, displayNewDepartmentForm, postDepartment } = require('../controllers/department-ctrl');

router.get('/departments', getDepartments);
router.get('/departments/:id', getOneDepartment)
router.get('/postDepartment', displayNewDepartmentForm);
router.post('/postDepartment', postDepartment);

module.exports = router;
