const express = require('express');

// import Student schema from models
const Students = require('../models/Student')

const allStudents =async (req,res) => {
    try {
        const students = await Students.find({});
        res.json(students);
    } catch (error) {
        console.log("Error from while fetching data",error.message);
    }
}

module.exports = {allStudents}