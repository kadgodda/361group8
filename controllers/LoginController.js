var UserModel = require('../models/User')
var bcrypt = require('bcryptjs');
var DB = require('../db');

exports.Login = function(request, response){
	response.render('Login/Login');
}

exports.Authenticate = function(request, response){
	db = new DB();
	var user = db.getUserByName(request.username);
	
	if (bcrypt.compareSync(request.password, user.passwordHash)){
		app.setUserLoggedIn()
	}
	else {
		response.render('Login/Login', {"error": "Incorrect login."});
	}
}; 