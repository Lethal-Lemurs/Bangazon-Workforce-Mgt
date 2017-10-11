'use strict'

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
