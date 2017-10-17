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

module.exports.getOneDepartment = (req, res, next) => {
  const { Department, Employee } = req.app.get('models');
  Department.findOne({where: {id: req.params.id}, include: [{model: Employee}] })
  .then( (data) => {
      const {dataValues} = data;
      let department = dataValues;
      let employees = department.Employees
      res.render('department-details', {department, employees});
      })
      .catch( (err) => {
        console.log('error!')
        next(err);
      }); 
};

module.exports.displayNewDepartmentForm = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.findAll()
  .then( () => {
    res.render('create-department')
  })
  .catch( (err) => {
    next(err);
  }); 
};

module.exports.postDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.create({
    name: req.body.name
  })
  .then( () => {
    res.redirect('departments');
  })
  .catch( (err) => {
    console.log(err);    
  });
};
