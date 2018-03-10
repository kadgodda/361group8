var User = require("./models/User")

var DB = function(){
};

DB.prototype.getUserByName = function(){
	return new User("test user");
};

module.exports = DB;