'use strict'

module.exports.getComputers = (req, res, next) => {
  const { Computer } = req.app.get('models');
  Computer.findAll()
  .then( (computers) => {
    res.render('computers', {computers});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.displayNewComputerForm = (req, res, next) => {
  res.render('add-computer');
}

// POST for computers by glen
module.exports.postComputer = (req, res, next) => {
  const { Computer } = req.app.get('models');
  Computer.create({
    manufacturer: req.body.manufacturer,
    make: req.body.make,
    purchase_date: new Date()
  })
  .then(() => {
   res.redirect('/computers');
  })
  .catch( (err) => {
    console.log(err);
  }) 
}
