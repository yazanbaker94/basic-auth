'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
require('dotenv').config()
const signin = require('./auth/signin');
const Users = require('./Sequalize')
// Prepare the express app




const router = express.Router();
// Process JSON input and put the data on req.body




// Process FORM intput and put the data on req.body


// Create a Sequelize model


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', signin, (req,res) => {});


// make sure our tables are created, start up the HTTP server.


module.exports = router;