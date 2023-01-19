const express = require("express");
const router = express.Router();

const { allStudents, addStudent } = require("../controllers/students");

router.route("/all").get(allStudents);
router.route("/").post(addStudent);

module.exports = router;
