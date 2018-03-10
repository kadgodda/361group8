var HomeController = require('./controllers/HomeController');
var LoginController = require('./controllers/LoginController');

// Routes
module.exports = function(app){
     
    // Main Routes
    app.get('/', HomeController.Index);
    app.get('/other', HomeController.Other);
	app.get('/login', LoginController.Login);
	app.post('/login', LoginController.Authenticate);
};