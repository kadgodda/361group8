var UserModel = require('../models/User')

exports.Index = function(request, response){
	var user = new UserModel("Test User");
    response.render('home/Index', {user: user.test()});
};
 
exports.Other = function(request, response){
    response.title = 'Other';
    response.render('home/Other');
};
