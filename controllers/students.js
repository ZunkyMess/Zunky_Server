const express = require("express");

// import Student schema from models
const Students = require("../models/Student");

const allStudents = async (req, res) => {
  try {
    const students = await Students.find({});
    res.json(students);
  } catch (error) {
    console.log("Error from while fetching data", error.message);
  }
};

const addStudent = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const student = await new Students({
      name,
      email,
      password,
    });
    const savedata = await student.save();
    res.json(savedata);
  } catch (error) {
    console.log("Error from while fetching data", error.message);
  }
};

module.exports = { allStudents, addStudent };
