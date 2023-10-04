const express = require('express');

const { homePage, insertValues, getStudent } = require('../controllers/students-controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/submit', insertValues);

studentRouter.get('/student', getStudent );


module.exports = studentRouter;