const express = require('express');

const { homePage } = require('../controllers/students-controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);

module.exports = studentRouter;