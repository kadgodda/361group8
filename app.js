// content begun from http://www.9bitstudios.com/2014/10/creating-an-mvc-express-js-application/

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars  = require('express-handlebars'), hbs;
var app = express();

require('./router')(app);
 
app.set('port', 1337);
app.set('views', path.join(__dirname, 'views'));
 
/* express-handlebars - https://github.com/ericf/express-handlebars
A Handlebars view engine for Express. */
hbs = handlebars.create({
   defaultLayout: 'main'
});
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
app.use(express.static(path.join(__dirname, 'static')));
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
