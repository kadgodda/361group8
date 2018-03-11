var UserModel = require('../models/User')

exports.Register = function(request, response){
	var user = new UserModel("Test User");
    response.render('Login/Registration');
};

exports.Submit = function(request, response){   
    response.render('Login/Login', {"error": "New User Created. Please Login."});
}