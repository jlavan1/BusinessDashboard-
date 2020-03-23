const router = require('express').Router();
const userRoutes = require('./user');

// Index router for managing sub-routes
router.use('/users', userRoutes);

module.exports = router;