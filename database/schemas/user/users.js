const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength:30,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength:50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength:1024,
    }

  });

  
  const userModel = mongoose.model('User', userSchema);

  module.exports = {
    model: userModel,
    schema: userSchema
  }
  