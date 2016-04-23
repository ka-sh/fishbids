var express = require('express')
var marketR = express.Router();

// var market = require('../controllers/market.js')

marketR.get('/offers',function(req,res){
  res.send('All market offers');
})

//offers
marketR.get('/:sellerID/offers',function(req,res){
  res.send('market offers for sellerID: '+ req.params);
})
marketR.post('/:sellersID/offers',function(req,res){
  res.send('Adding market offer for user ID:'+req.params);
})

//Bids
marketR.get('/:sellerID/offers/:offerID/bids',function(req,res){
  res.send('Showing bids that belongs to : '+req.params);
})

marketR.post('/:sellerID/offers/:offerID/bids',function(req,res){
res.send('submitting bids for  '+req.params);
})

module.exports = marketR;
