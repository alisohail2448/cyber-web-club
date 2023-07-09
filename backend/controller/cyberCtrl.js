const Contact = require("../models/contactModel.js");
const Register = require("../models/registerModel.js");
const asyncHandler = require("express-async-handler");


const ContactUs = asyncHandler(async (req, res) => {
    try {
        const { name, email, message } = req.body;
    
        const newContact = new Contact({
          name,
          email,
          message,
        });
    
        const savedContact = await newContact.save();
    
        res.status(201).json({ message: 'Contact added successfully', contact: savedContact });
      } catch (error) {
        res.status(500).json({ message: 'Error adding contact', error });
      }
  });


const RegisterUser = asyncHandler(async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      mobile,
      year,
      branch,
      domain,
      github,
    } = req.body;

    // Create a new user using the Register model
    const newUser = new Register({
      firstname,
      lastname,
      email,
      mobile,
      year,
      branch,
      domain,
      github,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
  });


  module.exports = {
    ContactUs,
    RegisterUser
  }