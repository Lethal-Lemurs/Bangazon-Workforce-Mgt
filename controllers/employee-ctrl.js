'use strict'

// const { getDepartments } = require('../controllers/department-ctrl');

module.exports.getEmployees = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.findAll()
  .then( (employees) => {
    res.render('employees', {employees});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneEmployee = (req, res, next) => {
  const { Employees, Departments } = req.app.get('models');
  Employees.findOne({where: {id: req.params.id}, include: [{model: Departments}] })
  .then( (data) => {
    const {dataValues} = data;
    let employee = dataValues;
    console.log("DATA VAL", dataValues);
    id = req.params.id;
    res.render('employees-details', {employee});
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

module.exports.editOneEmployee = (req, res, next) => {
  // getOneEmployee();
  const { Employees } = req.app.get('models');
  console.log("id", id);
  console.log(req.body);
  Employees.findById(id)
  .then( (data) => {
    
    console.log("DATA!!!", data);
    // let func = req.body ?
    // res.redirect(`/employees-details/${id}`);
    res.redirect('/employees');
  })
  .catch( (err) => {
    console.log('error!')
  })
};

module.exports.displayNewEmployeeForm = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.findAll() 
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
    department: 1
    // computer: req.body.computer
  })
  .then( () => {
    res.redirect('employees');
  })
  .catch( (err) => {
    console.log(err);    
  })
}
