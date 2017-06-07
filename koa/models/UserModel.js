var mongoose = require('mongoose');       

var User = mongoose.model('user', new mongoose.Schema({
  email: String,   
  pwd: String,   
  nicheng: String,
  role:Number,
  createtime:Date
},{_id:true}));

module.exports = User