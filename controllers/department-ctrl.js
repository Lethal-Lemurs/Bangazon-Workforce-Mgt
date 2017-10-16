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
  const { Department } = req.app.get('models');
  Department.findById(req.params.id)
  .then( (data) => {
    const { dataValues } = data;
    let Departments = [dataValues];
    res.render('departments', {Departments}); 
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
