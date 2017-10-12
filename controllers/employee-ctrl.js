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
