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

module.exports.getOneEmployee = (req, res, next) => {
  const { Employee, Department } = req.app.get('models'); 
  Employee.findOne({where: {id: req.params.id}, include: [{model: Department}] })
  .then( (data) => {
    Department.findAll()
    .then( (departments) => {
      const {dataValues} = data;
      let employee = dataValues;
      res.render('employees-details', {employee, departments});
      })
      .catch( (err) => {
        console.log('error!')
        next(err);
      })
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

module.exports.editOneEmployee = (req, res, next) => {
  const { Employee, Department } = req.app.get('models');
    Employee.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      start_date: new Date(),
      department: req.body.department
    }, {where: {id: req.params.id}})
    .then(() => {
      res.redirect('/employees');
    })
  .catch( (err) => {
    console.log('error!')
    next(err);
  })
};

module.exports.postEmployee = (req, res, next) => {
  // let dropdown = document.getElementById('dropdown');
  // let dropdownValue = dropdown.options[dropdown.selectedIndex].value
  const { Employee } = req.app.get('models');
  Employee.create({
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
