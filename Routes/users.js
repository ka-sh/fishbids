var express = require('express');
var userR = express.Router();
// var user = require('../controller/users.js')


userR.get('/:id',function(req,res){
  res.send("Retriving user information for user "+req.params);
});

userR.get('/',function(req,res){
  res.send("Retriving all userIDs: " +req.params);
})

module.exports=userR;
