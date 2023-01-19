const express = require("express");

const Admin = require("../models/Admin");

const allAdmin = async (req, res) => {
  try {
    const users = await Admin.find({});
    res.json(users);
  } catch (error) {
    console.log({ Message: error.mesage });
  }
};

const addAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const admin = await new Admin({
      name,
      email,
      password,
    });
    const user = await admin.save();
    res.json(user);
  } catch (error) {
    res.status(500).send({ Message: error.mesage });
  }
};

module.exports = { allAdmin, addAdmin };
