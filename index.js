var express = require("express");
var app = express();
var marketRouter = require('./Routes/market.js');
var userRouter = require('./Routes/users.js');


//App configuration

app.set('views',__dirname+'/views');
app.set('view engine','jade');

//======>End of app configuraiton
app.use('/users',userRouter);
app.use('/market',marketRouter);
app.get('/marketplace',function(req,res){
  res.render('marketplace')
});

app.use(express.static(__dirname + '/public'))
app.listen(5555);
