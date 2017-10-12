'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

// pipe all other requests through the route modules
router.use(require('./computer-route'));
router.use(require('./employee-route'));
router.use(require('./department-route'));

module.exports = router;
