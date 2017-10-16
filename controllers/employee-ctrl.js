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

module.exports.getOneEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.findById(req.params.id)
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
  const { Employee } = req.app.get('models');
  Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    start_date: new Date(),
    department_id: req.body.selectval
    // computer: req.body.computer
  })
  .then( () => {
    res.redirect('employees');
  })
  .catch( (err) => {
    console.log(err);    
  })
}