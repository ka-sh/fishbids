var mongoose = require('mongoose');
var controller = {
  allusers:function(obj){
    console.log('all users');
  },
  user:function(obj){
    console.log("user profile");
  }

};
module.exports = controller;
