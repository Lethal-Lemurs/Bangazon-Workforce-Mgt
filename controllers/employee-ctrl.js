'use strict'

let id;

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
  const { Employees, Departments } = req.app.get('models');
  Employees.findOne({where: {id: req.params.id}, include: [{model: Departments}] })
  .then( (data) => {
    const {dataValues} = data;
    let employee = dataValues;
    console.log("DATA VAL", dataValues);
    id = req.params.id;
    res.render('employees-details', {employee});
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

module.exports.editOneEmployee = (req, res, next) => {
  // getOneEmployee();
  const { Employees } = req.app.get('models');
  console.log("id", id);
  console.log(req.body);
  Employees.findById(id)
  .then( (data) => {
    
    console.log("DATA!!!", data);
    // let func = req.body ?
    // res.redirect(`/employees-details/${id}`);
    res.redirect('/employees');
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
