'use strict'

module.exports.getDepartments = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.findAll() 
  .then( (departments) => {
    res.render('departments', {departments});
  })
  .catch( (err) => {
    next(err);
  });
};
