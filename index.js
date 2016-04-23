var express = require("express");
var app = express();
var marketRouter = require('./Routes/market.js');
var userRouter = require('./Routes/users.js');


//TODO:Add external routes
//TODO:Add accounts API => fetch account information based on the ID/Account username.
//TODO:Add Market api =>Market api related to offer and buy requests
//TODO:Add default routing path

app.use('/users',userRouter);
app.use('/market',marketRouter);

app.listen(5555);
