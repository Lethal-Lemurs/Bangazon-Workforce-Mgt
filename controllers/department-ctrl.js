'use strict'

module.exports.getDepartments = (req, res, next) => {
  const { Departments } = req.app.get('models');
  Departments.findAll() 
  .then( (departments) => {
    res.render('departments', {departments});
  })
  .catch( (err) => {
    next(err);
  });
};
