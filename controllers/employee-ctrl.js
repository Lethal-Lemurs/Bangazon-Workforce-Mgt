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

module.exports.getOneEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findById(req.params.id)
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

module.exports.editOneEmployee = (req, res, next) => {
  const { Employees } = req.app.put('models');
  Employees.findById(req.params.id)
  .then( (data) => {
    console.log("DATA!!!", data);
    // let func = req.body ? 
    const {dataValues} = data;
    let employees = [dataValues];
    res.render('employees', {employees});
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

// app.put('/users/:id', (req, res, next) => {
//   User.findById(req.params.id)
//   .then( (foundUser) => {
//     console.log('User\'s full name', foundUser.getFullName() );

//     let func = req.body.ShowId ? 'addFavorite' : 'update';
//     foundUser[func](req.body.ShowId || req.body)
//     .then( (stuff) => {
//       res.status(201).json(stuff);
//     });
//   });
// });
