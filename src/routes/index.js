const express = require('express');
const tasksRoute = require('./tasks');
const router = express.Router();

router.use('/tasks', tasksRoute);

module.exports = router;
