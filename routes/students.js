const express = require('express');
const router = express.Router();

const {allStudents} = require('../controllers/students')

router.route('/').get(allStudents)


module.exports = router;

