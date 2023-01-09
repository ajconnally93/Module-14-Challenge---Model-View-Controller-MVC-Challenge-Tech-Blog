const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// creates /api re-direct
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;