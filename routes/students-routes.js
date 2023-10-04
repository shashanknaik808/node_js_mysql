const express = require('express');

const { homePage,
    insertValues,
    getStudent,
    deleteStudents,
    updateStudents 
} 
= require('../controllers/students-controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/submit', insertValues);

studentRouter.get('/student', getStudent);
studentRouter.get('/delete-student', deleteStudents);
studentRouter.get('/update-student', updateStudents);
studentRouter.post('/update-student', );


module.exports = studentRouter;