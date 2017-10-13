'use strict'

// const { getDepartments } = require('../controllers/department-ctrl');

module.exports.getEmployees = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findAll()
  .then( (employees) => {
    res.render('employees', {employees});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findById(req.params.id)
  .then( (data) => {
    const {dataValues} = data;
    let employees = [dataValues];
    res.render('employees', {employees});
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

module.exports.displayNewEmployeeForm = (req, res, next) => {
  const { Departments } = req.app.get('models');
  Departments.findAll() 
  .then( (departments) => {
    res.render('create-employee', {
      departments
    });
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.postEmployee = (req, res, next) => {
  // let dropdown = document.getElementById('dropdown');
  // let dropdownValue = dropdown.options[dropdown.selectedIndex].value
  const { Employees } = req.app.get('models');
  Employees.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    start_date: new Date(),
    department: "shit"
    // computer: req.body.computer
  })
  .then( () => {
    res.redirect('employees');
  })
  .catch( (err) => {
    console.log(err);    
  })
}