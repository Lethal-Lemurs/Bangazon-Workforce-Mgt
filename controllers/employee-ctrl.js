'use strict'

module.exports.getEmployees = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findAll()
  .then( (employees) => {
    console.log("GETALL", employees)
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
    console.log("employees", employees);

    res.render('employees', {employees});
  })
  .catch( (err) => {
    console.log('errrrr!')
    next(err);
  });
};
