var mongoose = require('mongoose');
var controller = {
  allOffers:function(obj){
    console.log('all offers');
  },
  subOffer:function(obj){
    console.log("submitting an offer");
  }
  ,bid:function(obj){
    console.log("Bidding on an offer.");
  },
  allBids:function(obj){
    console.log("all bids");
  }

};
module.exports = controller;
