var HomeController = require('./controllers/HomeController');
var LoginController = require('./controllers/LoginController');
var RegController = require('./controllers/RegController')

// Routes
module.exports = function(app){
     
    // Main Routes
    app.get('/', HomeController.Index);
    app.get('/other', HomeController.Other);
	app.get('/login', LoginController.Login);
	app.post('/login', LoginController.Authenticate);
	app.get('/register', RegController.Register);
    	app.post('/register', RegController.Submit);
};
