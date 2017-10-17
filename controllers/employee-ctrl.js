'use strict'

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
  .then( (empData) => {
      const {dataValues:employee} = empData;
      res.render('employees-details', {employee});        
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

// Function written by David with the help of Dominic.
module.exports.getOneEmployeeForEdit = (req, res, next) => {
  const { Employee, Department } = req.app.get('models');
  let employeeData;
  Employee.findOne({where: {id: req.params.id}, include: [{model: Department}] })
  .then( (data) => {
    employeeData = data;
    return Department.findAll()
  })
  .then( (departments) => {
    const {dataValues: employee} = employeeData;
    res.render('employees-edit', {employee, departments});
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  })
};

module.exports.editOneEmployee = (req, res, next) => {
  const { Employee, Department } = req.app.get('models'); 
  Employee.findOne({where: {id: req.params.id}, include: [{model: Department}] })
  .then( (data) => {
    const {dataValues: employee} = data;
    Employee.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      start_date: req.body.start_date,
      department_id: req.body.selectval
    }, {where: {id: req.params.id}})
  })
  .then( () => {
      res.redirect('/employees');
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  })
};

module.exports.postEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    start_date: new Date(),
    department_id: req.body.selectval
  }).catch( (err) => {
    console.log('error!')
    next(err);
}).then( () => {
  res.redirect('employees');
  }).catch( (err) => {
    console.log(err);    
  })
}
